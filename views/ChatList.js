import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const chats = [
  {
    name: 'Viktor',
    number: 1,
  },
  {name: 'Jens', number: 2},
  {name: 'Joacim', number: 3},
];

export const ChatList = ({navigation}) => {
  const pressHandler = chat => {
    console.log(chat);
    navigation.navigate('ChatView', {name: 'Jens', number: 2});
  };

  return (
    <View style={styles.view}>
      {chats.map(chat => (
        <Button
          key={chat.number}
          title={`Chat ${chat.number} with ${chat.name}`}
          style={styles.chatButton}
          onPress={() => {
            pressHandler(chat);
          }}
        />
      ))}
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
