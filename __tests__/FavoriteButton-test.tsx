import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FavoriteButton from '../src/components/FavoriteButton';

let component: any;
let isFavorite: boolean;
let setIsFavorite: (value: boolean) => void;

describe('<FavoriteButton />', () => {
    beforeEach(() => {
        isFavorite = false;
        setIsFavorite = (value: boolean) => {
            isFavorite = value;
        };

        component = render(<FavoriteButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} />);
    });

    it('Renderiza correctamente', () => {
        expect(component).toBeDefined();
    });

    it('Cambia el estado de isFavorite al hacer click en el botón', () => {
        const { getByTestId } = component;
        const button = getByTestId('favorite-button');

        fireEvent.press(button);

        expect(isFavorite).toBe(true);
    });
});
