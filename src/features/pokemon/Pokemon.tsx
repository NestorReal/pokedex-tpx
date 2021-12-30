import { BrowserRouter as Route, Link } from 'react-router-dom'
import { useGetPokemonByNameQuery } from './services/pokemon'

export const Pokemon = ({
  name,
}: {
  name: string
}) => {
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(
    name,
  )

   const redirect =  (name: string) =>{
     console.log(name)
    return <Route><Link to={name} /></Route>
   }

  return (
    <div style={{margin: '10px'}} onClick={() => redirect(name)  }>
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
