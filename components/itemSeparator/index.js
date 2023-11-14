import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ItemSeparator() {
    return (
        <View style={styles.container} />
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111',
        height: 5,
    },
});