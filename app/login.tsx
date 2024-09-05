import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Login Screen</Text>
      <View style={styles.buttonContainer}>
        <Button title="Go to Home" onPress={() => router.push('/home')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to Register" onPress={() => router.push('/register')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 16, 
  },
});
