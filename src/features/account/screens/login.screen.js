import React, { useState } from 'react';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from '../components/account.styles';
import { TextInput } from 'react-native-paper';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <TextInput label="email" placeholder="youremail@gmail.com" />
        <TextInput label="password" />
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => {}}
        >
          Login
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
