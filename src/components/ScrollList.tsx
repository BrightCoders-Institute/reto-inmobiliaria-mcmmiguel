import React from 'react';
import { ScrollView } from 'react-native';
import Card from './Card';
import Properties from '../data/properties.json';

export default function ScrollList() {

    return (
        <ScrollView>
            {Properties.properties.map((property, index) => (
                <Card
                    key={index}
                    image={property.imageUrl}
                    name={property.name}
                    address={property.address}
                    rooms={property.rooms}
                    bath={property.bathrooms}
                    surface={property.surface}
                    rent={property.rent}
                    rating={property.rating}
                />
            ))}
        </ScrollView>
    );

}
