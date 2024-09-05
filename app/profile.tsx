import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Go to Settings" onPress={() => router.push('/settings')} />
    </View>
  );
}
