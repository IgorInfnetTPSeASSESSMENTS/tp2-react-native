import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ForgotPasswordScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Forgot Password Screen</Text>
      <Button title="Go to Login" onPress={() => router.push('/login')} />
    </View>
  );
}
