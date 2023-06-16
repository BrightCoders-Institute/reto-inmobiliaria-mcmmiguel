import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function FavoriteButton({ isFavorite, setIsFavorite }: { isFavorite: any, setIsFavorite: any }) {

    const toggleIsFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <TouchableOpacity style={styles.hearthContainer} onPress={toggleIsFavorite}>
            <View style={[styles.hearthBackground, isFavorite && styles.hearthBackgroundActive]} />
            <Image style={styles.hearthIcon} source={require('../../img/hearth.png')} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    hearthContainer: {
        position: 'absolute',
        bottom: 25,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    hearthIcon: {
        width: 15,
        height: 15,
        marginLeft: 2.5,
        resizeMode: 'contain',
    },
    hearthBackground: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        position: 'absolute',
        marginLeft: -5,
        backgroundColor: 'green',
        borderRadius: 50,
    },
    hearthBackgroundActive: {
        backgroundColor: 'red',
    },
});
