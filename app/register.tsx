import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Register Screen</Text>
      <Button title="Go to Login" onPress={() => router.push('/login')} />
    </View>
  );
}
