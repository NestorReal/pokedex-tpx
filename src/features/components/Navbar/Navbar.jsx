
const Navbar = () => {

    let logo = require('../../../images/pokedeex.png')

    return(
        <nav>
            <div />
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={logo} alt="pokeapi-logo"
            className="navbar-img"
            >
            </img>
            </div>
        </nav>
    )
}

export default Navbar;