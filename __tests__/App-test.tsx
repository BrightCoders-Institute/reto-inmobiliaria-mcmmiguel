import 'react-native';
import React from 'react';
import App from '../App';
import { render } from '@testing-library/react-native';

let component: any;

describe('<App />', () => {
  beforeEach(() => {
    component = render(<App />);
  });

  it('Renderiza correctamente', () => {
    expect(component).toBeDefined();
  });
});

