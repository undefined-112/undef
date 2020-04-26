import React, { useState, Fragment, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const styles = {
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: 1,
  },
};

const url = 'https://undefined-backend.herokuapp.com/api/login';

const Login = ({}) => {
  const [state, setState] = useState({ username: '', password: '' });
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setError] = useState('');

  const updateState = (key, value) => {
    const modifiedState = { ...state, [key]: value };
    setState(modifiedState);
  };

  useEffect(() => {
    async function fetch() {
      const username = 'erik';
      const password = 'cpl123';

      try {
        const res = await axios.post(url, {
          username: username,
          password: password,
        });
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetch();

    return () => {
      console.log('termiante');
    };
  });

  const doLogin = async () => {
    const { username, password } = state;

    try {
      setLoading(true);
      await axios.post(url, { username, password });
    } catch (error) {
      console.error(error);
      setError(error);
    }

    setLoading(false);

    setLoading(false);
  };

  return (
    <View style={styles.view}>
      <Text>
        Login {state.username} - {state.password}
      </Text>

      {isLoading ? (
        <Text>Signing you in</Text>
      ) : (
        <Fragment>
          <TextInput
            placeholder="Username"
            style={styles.input}
            autoFocus={true}
            keyboardAppearance="dark"
            value={state.username}
            editable
            maxLength={16}
            onChangeText={(value) => updateState('username', value)}
          />

          <TextInput
            type="password"
            placeholder="Password"
            keyboardAppearance="light"
            style={styles.input}
            value={state.password}
            editable
            maxLength={16}
            onChangeText={(value) => updateState('password', value)}
          />

          <TouchableOpacity onPress={() => doLogin()}>
            <Text>Sign in</Text>
          </TouchableOpacity>
        </Fragment>
      )}

      {errorMessage.lenght > 1 && <Text>{errorMessage}</Text>}
    </View>
  );
};

export default Login;
