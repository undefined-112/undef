import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const style = {
  view: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const url = 'https://192.168.50.4:5001/api/message';

const Message = () => {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const res = await axios.get(url);
      setMessage(res.data.message);
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
  };

  return (
    <View style={style.view}>
      <Text>{message}</Text>
      <Button
        onPress={() => fetchMessage()}
        title="Fetch me the message bruv"
      />
    </View>
  );
};

export default Message;
