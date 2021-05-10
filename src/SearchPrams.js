import React, {useState, useEffect, useContext} from 'react';
import useDropdown from './useDropdown';
import Results from "./Results";
import pet, { ANIMALS } from "@frontendmasters/pet";
import ThemeContext from "./ThemeContext";

const SearchPrams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [pets, setPets] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [theme, setTheme] = useContext(ThemeContext);

    async function requestPets() {
        const { animals } = await pet.animals ({
            location,
            breed,  
            type: animal
        });
        setPets(animals || []);
    }
    useEffect(() => {
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({ breeds: apiBreeds }) => {
            const breedString = apiBreeds.map((obj) => obj.name);
            setBreeds(breedString);
        }, console.error);
        
    }, [animal, setBreeds, setBreed]);
    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input value={location} id="location" placeholder="Location" onChange={event => setLocation(event.target.value)}/>
                    
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <label htmlFor="theme">
                    Theme
                    <select 
                        value={theme} 
                        onChange={e => setTheme(e.target.value)}
                        onBlur={e => setTheme(e.target.value)}
                    >   
                        <option value="orange">default</option>
                        <option value="peru">Peru</option>
                        <option value="grey">grey</option>
                        <option value="salmon">Salmon</option>
                        <option value="maroon">Maroon</option>
                    </select>
                </label>
                <button style={{ backgroundColor: theme }}>
                    Submit
                </button>
            </form>
            <Results pets={pets} />
        </div>
    )
}
export default SearchPrams;