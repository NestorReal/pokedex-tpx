import './styles.css'
import { Pokemon } from './Pokemon'
  import Navbar from '../components/Navbar/Navbar';
  import { Grid } from './styles';

export default function App() {
    console.log(window.location.href)
    var url = new URL(window.location.href);
    return (
        <div>
            <Navbar />
            <Grid>
                <Pokemon name={url.pathname.split('/')[1]} />
            </Grid>
        </div>
  )
}