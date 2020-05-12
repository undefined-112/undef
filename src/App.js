import React from 'react';
import { View, Text } from 'react-native';
import { TokenProvider } from './context/token';

export const App = () => {
  return (
    <TokenProvider>
      <View>
        <Text>Hej</Text>
      </View>
    </TokenProvider>
  );
};
