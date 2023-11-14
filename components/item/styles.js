import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const IMAGE_SIZE = width * 0.25;
const SPACING = width * 0.05;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        flexDirection: 'row',
        borderRadius: SPACING,
        padding: SPACING / 2,
    },
    imageContainer: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE / 2,
        marginRight: SPACING,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    email: {
        fontSize: 16,
        color: '#fff',
    },
});