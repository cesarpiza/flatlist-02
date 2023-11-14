import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native';

export default function Item(props) {

    const {
        name,
        email,
        avatar,
    } = props;

    return (
        <TouchableOpacity
            onPress={() => { }}
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: avatar }}
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <Text numberOfLines={1} style={styles.name}>
                        {name}
                    </Text>
                    <Text numberOfLines={1} style={styles.email}>
                        {email}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}