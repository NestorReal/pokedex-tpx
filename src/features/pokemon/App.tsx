import './styles.css'
import { Pokemon } from './Pokemon'
import { PokemonList } from './PokemonList';
import { useState } from 'react'
import {
    Formik,
    Form,
    Field,
  } from 'formik';
  import Navbar from '../components/Navbar/Navbar';
  import { InputContainer, Grid } from './styles';


interface MyFormValues {
    firstName: string;
  }

export default function App() {
  const initialValues: MyFormValues = { firstName: '' };
  const [name, setName] = useState('');
  const [listValue, showlist] = useState(true);
  return (
    <div>
      <Navbar />
      <div className="App">
        <Formik
          initialValues={initialValues}
          onSubmit={values => setName(values.firstName)}
        >
          <Form style={{display: 'flex', justifyContent: 'center'}}>
            <InputContainer style={name !== '' ? {width: '400px'}: null}>
              <Field id="pokemon" name="firstName" placeholder="pokemon" />
              <button type="submit">Buscar</button>
              {name !== '' ? <button onClick={() => {showlist(true); setName('');}} className='buttonShow'>Mostrar todos</button> : null}     
            </InputContainer>
          </Form>
        </Formik>
        {name !== '' ? (<div>{name !== '' ? <Grid><Pokemon name={name} /></Grid> : null}</div>) : null}
        {listValue && name === ''  ? <Grid><PokemonList name='' /></Grid>  : null}
      </div>
    </div>
  )
}