import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function NewItemScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>New Item Screen</Text>
      <Button title="Go to Dashboard" onPress={() => router.push('/dashboard')} />
    </View>
  );
}
