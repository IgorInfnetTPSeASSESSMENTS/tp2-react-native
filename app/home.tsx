import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Button title="Go to Dashboard" onPress={() => router.push('/dashboard')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to Profile" onPress={() => router.push('/profile')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to Componentes" onPress={() => router.push('/componentes')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 16, 
  },
});
