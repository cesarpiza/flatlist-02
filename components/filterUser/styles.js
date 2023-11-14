import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const IMAGE_SIZE = width * 0.25;
const SPACING = width * 0.1;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(60,30,100)',
        padding: SPACING,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        flex: 0.8,
        backgroundColor: '#fff',
        padding: 8,
        fontSize: 18,
    }
});