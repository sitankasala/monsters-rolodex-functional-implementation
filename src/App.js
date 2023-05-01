import './App.css';
import {useEffect, useState} from "react";
import CardList from "./components/card-list.component";
import SearchBox from "./components/search-box.component";


function App() {
    const [monsters, setMonsters] = useState([])
    const [searchField, setSearchField] = useState('')
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)
    useEffect(() => {
        const newMonsterFilters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField)
        });
        setFilteredMonsters(newMonsterFilters);
    }, [monsters, searchField]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setMonsters(users))
    }, [])
    const handleOnChange = (event) => {
        const searchField = event.target.value.toLowerCase();
        setSearchField(searchField)
    };
    return (
        <div className="App">
            <h1 className='app-title'>Monsters Rolodex</h1>
            <SearchBox searchField={searchField} className='search-box' placeholder='search-monsters'
                       handleOnChange={handleOnChange}/>
            <CardList monsters={filteredMonsters}/>
        </div>)
}

export default App;
