import { useGetPokemonByNameQuery } from './services/pokemon'

export const Pokemon = ({
  name,
}: {
  name: string
}) => {
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(
    name,
  )

  return (
    <div style={{margin: '10px'}}>
      {error ? (
        <>Pokemon no encontrado</>
      ) : isLoading ? (
        <>Cargando...</>
      ) : data ? (
        <>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
          <h3>
            {data.species.name} {isFetching ? '...' : ''}
          </h3>
        </>
      ) : null}
    </div>
  )
}
