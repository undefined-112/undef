import React from 'react';
import {View, StyleSheet} from 'react-native';

import ChatNavigator from './routes/chatStack.js';

const signedIn = true; // Temp variable
const showRegistrationForm = true;

export const App = () => {
  if (signedIn) {
    return <ChatNavigator />;
  } else if (showRegistrationForm) {
    return <SignUpForm />;
  } else {
    return <SignInForm />;
  }
};
