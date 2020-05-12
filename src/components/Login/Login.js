import React, { useState, Fragment } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const styles = {
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 800,
  },
  input: {
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: 1,
  },
};

const url = 'http://127.0.0.1:8080/api/login'; // 'https://undefined-backend.herokuapp.com/api/login';

const Login = ({}) => {
  const [state, setState] = useState({ username: '', password: '' });
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setError] = useState('');

  const updateState = (key, value) => {
    const modifiedState = { ...state, [key]: value };
    setState(modifiedState);
  };

  const doLogin = async () => {
    const { username, password } = state;

    try {
      setLoading(true);
      const res = (await axios.post(url, { username, password })).data;
      console.log('res: ', res);
    } catch (error) {
      console.log(error);
      setError(error);
    }

    setLoading(false);
  };

  return (
    <View style={styles.view}>
      {isLoading ? (
        <Text>Signing you in</Text>
      ) : (
        <Fragment>
          <TextInput
            placeholder="Username"
            style={styles.input}
            autoFocus={true}
            autoCapitalize="none"
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
            secureTextEntry={true}
            autoCapitalize="none"
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
