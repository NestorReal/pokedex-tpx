import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { ApiProvider } from '@reduxjs/toolkit/query/react'

import { pokemonApi } from './features/pokemon/services/pokemon';


test('renders learn react link', () => {
  const { getByText } = render(
    <ApiProvider api={pokemonApi}>
      <App />
    </ApiProvider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
