import React, {useState} from 'react';
const SearchBar = (props) => {

    const {onSearch} = props;
    const[search,setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
        if(e.target.value.length === 0) {
            onSearch(null);
        }
    }

    const handleSearch = async (e) => {
        onSearch(search);
    }

    return (
    <div className="searchbar-container">
        <div className="searchbar">
            <input placeholder="Buscar Pokemon..."
            type="text"
            onChange={handleChange}
            ></input>
        </div>
         <div className="searchbar-btn">
            <button onClick={handleSearch}>Buscar</button>
         </div>
         {search !== '' ? (
            <div className="searchbar-btn" style={{marginLeft: '10px'}}>
                <button onClick={() => props.openList()}>Mostrar Todos</button>
            </div>) 
        : null}
        </div>
    )
}

export default SearchBar;