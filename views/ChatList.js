import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

export const ChatList = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('ChatView');
  };

  return (
    <View style={styles.view}>
      <Button title="Chat 1" style={styles.chatButton} onPress={pressHandler} />
      <Button title="Chat 2" style={styles.chatButton} onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    backgroundColor: '#cccccc',
    flex: 1,
  },
  chatButton: {
    backgroundColor: 'black',
    borderStyle: 'solid',
  },
});
