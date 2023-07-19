import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: Math.abs(width * 0.8),
        resizeMode: 'cover'
    },
    loader: {
        alignSelf: 'center'
    }
})