import React from 'react';
import { render } from '@testing-library/react-native';
import Card from '../src/components/Card';

describe('<Card />', () => {
    it('Renderiza correctamente', () => {
        const props = {
            image: 'https://example.com/image.png',
            name: 'The Willows',
            address: '3517 W, Gray St. Utica',
            rooms: '3',
            bath: '2',
            surface: '230 ft²',
            rent: '440/m',
            rating: '4.7',
        };

        const { getByText } = render(<Card {...props} />);

        expect(getByText(props.name)).toBeTruthy();
        expect(getByText(props.address)).toBeTruthy();
        expect(getByText(props.rooms)).toBeTruthy();
        expect(getByText(props.bath)).toBeTruthy();
        expect(getByText(props.surface)).toBeTruthy();
        expect(getByText('$' + props.rent)).toBeTruthy();
        expect(getByText(props.rating)).toBeTruthy();
    });
});
