import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default function Card() {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../img/property.png')} style={styles.image} />
            </View>

            <View style={styles.info}>
                <Text>The Willows</Text>
                <View style={styles.address}>
                    <Image source={require('../../img/star.png')} />
                    <Text>3517 W.Gray</Text>
                </View>

                <View style={styles.facilities}>
                    <View style={styles.beds}>
                        <Image style={styles.facilitiesIcon} source={require('../../img/bed.png')} />
                        <Text>2</Text>
                    </View>

                    <View style={styles.baths}>
                        <Image style={styles.facilitiesIcon} source={require('../../img/bath.png')} />
                        <Text>5</Text>
                    </View>

                    <View style={styles.area}>
                        <Image style={styles.facilitiesIcon} source={require('../../img/area.png')} />
                        <Text>5</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text>$440/month</Text>
                    <Image source={require('../../img/hearth.png')} />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 150,
        flexDirection: 'row',
        backgroundColor: 'red',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    image: {
        width: '95%',
        height: '95%',
        resizeMode: 'contain',
    },
    info: {
        flex: 2,
        alignItems: 'flex-start',
    },
    address: {
        flexDirection: 'row',
    },
    facilities: {
        flexDirection: 'row',
    },
    facilitiesIcon: {
        width: 25,
        resizeMode: 'contain',
    },
    beds: {
        flexDirection: 'row',
    },
    baths: {
        flexDirection: 'row',
    },
    area: {
        flexDirection: 'row',
    },
    footer: {
        flexDirection: 'row',
    },
});
