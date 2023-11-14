import React, { useEffect, useState } from 'react';
import {
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FilterUser(props) {

    const {
        searchText,
        setSearchText,
        handleOrderClick,
    } = props;

    return (
        <View style={styles.container}>
            <TextInput
                value={searchText}
                placeholder='Pesquise uma pessoa'
                placeholderTextColor={'#555'}
                onChangeText={(text) => setSearchText(text)}
                style={styles.textInput}
            />
            <TouchableOpacity
                onPress={handleOrderClick}
            >
                <MaterialCommunityIcons
                    style={{

                    }}
                    name="order-alphabetical-ascending"
                    size={32}
                    color="#888"
                />
            </TouchableOpacity>
        </View>
    );
}