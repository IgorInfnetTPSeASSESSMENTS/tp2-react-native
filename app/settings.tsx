import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Settings Screen</Text>
      <Button title="Go to Forgot Password" onPress={() => router.push('/forgot-password')} />
    </View>
  );
}
