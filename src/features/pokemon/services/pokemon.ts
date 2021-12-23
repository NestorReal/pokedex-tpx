import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
//     pokemon: counterReducer,
//   },
// });

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
    getPokemonList: builder.query({
      query: () => `pokemon/`,
    }),
  }),
})

export const pokemonList = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: () => `pokemon/`,
    }),
  }),
})


// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery } = pokemonApi
export const { useGetPokemonListQuery } = pokemonList

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;