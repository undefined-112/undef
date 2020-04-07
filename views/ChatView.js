import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const ChatView = ({number}) => {
  return (
    <View style={styles.view}>
      <Text>Chat {number} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    backgroundColor: '#dddddd',
    flex: 1,
  },
});
