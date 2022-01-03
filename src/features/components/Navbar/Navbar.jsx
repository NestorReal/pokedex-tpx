
import  { useNavigate } from 'react-router-dom';

const Navbar = () => {

    let logo = require('../../../images/pokedeex.png')

    const navigate = useNavigate();
    const redirect =  () => {
        return navigate('/')
    }

    return(
        <nav>
            <div />
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={logo} alt="pokeapi-logo"
            className="navbar-img"
            onClick={() => redirect()}
            >
            </img>
            </div>
        </nav>
    )
}

export default Navbar;