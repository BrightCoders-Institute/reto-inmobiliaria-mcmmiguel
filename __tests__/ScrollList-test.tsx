import React, { Component } from 'react';
import { render } from '@testing-library/react-native';
import ScrollList from '../src/components/ScrollList';

let component: any;

describe('<ScrollList />', () => {
    beforeEach(() => {
        component = render(<ScrollList />);
    });

    it('Renderiza correctamente', () => {
        expect(component).toBeDefined();
    });
});
