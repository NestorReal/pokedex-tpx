import { useGetPokemonListQuery } from './services/pokemon'
import { Pokemon } from './Pokemon';
import './styles.css'


export const PokemonList = ({
    name,
  }: {
    name: string
  }) => {
    const { data, error, isLoading, isFetching } = useGetPokemonListQuery(
      name,
    )

  return (
    <>
      {error ? (
        <>Error al cargar lista de pokemones</>
      ) : isLoading ? (
        <>Cargando...</>
      ) : data ? (
        <>
        {isFetching ? '...' : ''}
        {data.results.map((pokemon: { name: string; }) => <Pokemon name={pokemon.name} />)}
        </>
      ) : null}
    </>
  )
}
