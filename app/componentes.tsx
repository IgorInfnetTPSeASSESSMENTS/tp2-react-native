import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Button as RNButton } from 'react-native';
import {
  Card,
  IconButton,
  List,
  ProgressBar,
  RadioButton,
  SnackBar,
  Tab,
  CustomMenu
} from '@/components'; 
import { PaperProvider } from 'react-native-paper';

const Componentes: React.FC = () => {
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('first');

  const handleSnackBarDismiss = () => setSnackBarVisible(false);
  const handleSnackBarShow = () => setSnackBarVisible(true);

  return (
    <PaperProvider>
        <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.section}>
            <Card
                title="Card Title"
                content="This is the content of the card."
                subtitle="Card Subtitle"
            />
            </View>

            <View style={styles.section}>
            <IconButton
                icon="star"
                size={32}
                onPress={() => alert('IconButton pressed!')}
            />
            </View>

            <View style={styles.section}>
            <List
                title="List Item"
                description="This is the description of the list item."
                onPress={() => alert('List item pressed!')}
            />
            </View>

            <View style={styles.section}>
            <ProgressBar progress={0.5} color="#6200ea" style={styles.progressBar} />
            </View>

            <View style={styles.section}>
            <RadioButton
                value="first"
                status={selectedValue === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedValue('first')}
            />
            <RadioButton
                value="second"
                status={selectedValue === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedValue('second')}
            />
            </View>

            <View style={styles.section}>
            <RNButton title="Show SnackBar" onPress={handleSnackBarShow} />
            </View>

            <View style={styles.section}>
            <Tab label="Tab 1" onPress={() => alert('Tab 1 pressed')} />
            <Tab label="Tab 2" onPress={() => alert('Tab 2 pressed')} />
            </View>

            <CustomMenu></CustomMenu>

        </ScrollView>

        <SnackBar
            visible={snackBarVisible}
            onDismiss={handleSnackBarDismiss}
            action={{
            label: 'Undo',
            onPress: () => alert('Undo pressed!')
            }}
            style={styles.snackBar}
        >
            This is a SnackBar!
        </SnackBar>
        </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 16,
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
  },
  snackBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
});

export default Componentes;
