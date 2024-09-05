import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, Button, Divider, PaperProvider } from 'react-native-paper';

const CustomMenu: React.FC = () => {
 
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Open Menu" onPress={openMenu} />

                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu} style={{backgroundColor: '#93ccea'}}>Menu</Button>}
                >
                    <Menu.Item onPress={() => alert('First Item Pressed')} title="First Item" />
                    <Menu.Item onPress={() => alert('Second Item Pressed')} title="Second Item" />
                    <Divider />
                    <Menu.Item onPress={() => alert('Third Item Pressed')} title="Third Item" />
                </Menu>
            </View>
  );
};


export default CustomMenu;
