import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const ChatView = ({route, navigation}) => {
  return (
    <View style={styles.view}>
      <Text>{/* Chat {number} with {name} */}</Text>
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
