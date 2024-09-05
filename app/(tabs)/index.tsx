import { Image, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ScrollView, ScrollViewComponent} from "react-native";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button, TextInput, Grid, Avatar } from '@/components'; 


import React from 'react';

export default function HomeScreen() {

  const [visible, setVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const onToggleSnackBar = () => setVisible(!visible);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Exercício 1 - Botão</ThemedText>
        <Button onPress={onToggleSnackBar} mode="contained">
          {visible ? 'Hide' : 'Show'}
        </Button>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Exercício 2 - Input</ThemedText>
        <TextInput
          label="Digite algo"
          value={inputValue}
          onChangeText={text => setInputValue(text)}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Exercício 3 - Grid</ThemedText>
        <Grid elevation={3} style={styles.gridContainer}>
          <ThemedView style={styles.gridItem}><ThemedText>Item 1</ThemedText></ThemedView>
          <ThemedView style={styles.gridItem}><ThemedText>Item 2</ThemedText></ThemedView>
          <ThemedView style={styles.gridItem}><ThemedText>Item 3</ThemedText></ThemedView>
        </Grid>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Exercício 4 - Imagem</ThemedText>
        <Avatar
          source={require('@/assets/images/golfinho.jpg')}
          size={100}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 8,
  },
  gridItem: {
    width: '30%',
    padding: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    marginBottom: 8,
  },
});
