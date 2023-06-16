import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FavoriteButton from './FavoriteButton';

export default function Card(
    { image, name, address, rooms, bath, surface, rent, rating }
        : {
            image: string, name: string, address: string, rooms: string, bath: string, surface: string, rent: string, rating: string
        }) {

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.rateContainer}>
                    <View style={styles.rate}>
                        <Image style={styles.rateImage} source={require('../../img/star.png')} />
                        <Text style={styles.rateText}>{rating}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.info}>
                <Text style={styles.infoName}>{name}</Text>
                <View style={styles.address}>
                    <Image style={styles.addressIcon} source={require('../../img/location.png')} />
                    <Text style={styles.addressText}>{address}</Text>
                </View>

                <View style={styles.facilities}>
                    <View style={styles.beds}>
                        <Image style={styles.facilitiesIcon} source={require('../../img/bed.png')} />
                        <Text style={styles.facilitiesText}>{rooms}</Text>
                    </View>

                    <View style={styles.baths}>
                        <Image style={styles.facilitiesIcon} source={require('../../img/bath.png')} />
                        <Text style={styles.facilitiesText}>{bath}</Text>
                    </View>

                    <TouchableOpacity style={styles.area}>
                        <Image style={styles.facilitiesIcon} source={require('../../img/area.png')} />
                        <Text style={styles.facilitiesText}>{surface}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.rent}>
                    <Text style={styles.rentText}>${rent}</Text>
                </View>

                <FavoriteButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 'auto', // Debe ser auto al final
        height: 180,
        flexDirection: 'row',
        backgroundColor: '#f5fdff',
        borderRadius: 20,
        marginVertical: 10,
    },
    imageContainer: {
        flex: 1,
        position: 'relative',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 40,
        zIndex: 0,
    },
    image: {
        borderRadius: 10,
        width: 120,
        height: '70%',
        resizeMode: 'cover',
    },
    rateContainer: {
        position: 'absolute',
        bottom: 30,
        right: 15, //En fisico 7
        zIndex: 1,
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#fbedb7',
    },
    rateImage: {
        width: 15,
        height: 15,
        marginRight: 3,
        resizeMode: 'contain',
    },
    rateText: {
        color: '#7a6229',
        fontWeight: '700',
    },
    info: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 'auto',
    },
    infoName: {
        fontWeight: '700',
        color: '#000',
        fontSize: 20,
        marginBottom: 15,
    },
    address: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    addressIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 5,
    },
    addressText: {
        color: 'grey',
    },
    facilities: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 15,
        marginBottom: 5,
    },
    facilitiesIcon: {
        width: 25,
        height: 26,
        resizeMode: 'contain',
    },
    facilitiesText: {
        color: '#000',
        fontWeight: '700',
    },
    beds: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    baths: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    area: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    rent: {
        flexDirection: 'row',
    },
    rentText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
    },/*
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
    },*/
});
