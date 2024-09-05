import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Dashboard Screen</Text>
      <Button title="Go to Home" onPress={() => router.push('/home')} />
    </View>
  );
}
