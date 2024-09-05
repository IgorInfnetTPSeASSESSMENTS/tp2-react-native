import * as React from 'react';
import { Surface } from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

const index = (props: any) => {
    return props.elevation ?
            <Surface style={{
                ...styles.surface,
                ...props.styleSurface
            }} elevation={3}>
                <View style={{
                    width: '100%',
                    ...props.style
                }}>
                    {props.children}
                </View>
            </Surface> :
            <View style={{
                width: '100%',
                ...props.style
            }}>
                {props.children}
            </View>;
};

index.defaultProps = {
    elevation: null,
    styleSurface: {},
    style: {}
}

export default index;

const styles = StyleSheet.create({
    surface: {
        padding: 8,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
});