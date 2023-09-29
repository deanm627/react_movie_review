import { useState } from 'react';
import { Results } from './Results';
import styled from 'styled-components';

export const Form = () => {
    const [movie, setMovie] = useState("");
    const [value, setValue] = useState("");

    async function getMovieInfo() {
        const url = `http://www.omdbapi.com/?t=${movie}&apikey=55fd11b0`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setValue(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getMovieInfo();
        setMovie("");
    }

    const handleChange = (e) => {
        setMovie(e.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    onChange={handleChange} 
                    value={movie}
                    placeholder='Type movie name here'
                />
                <button type='submit'>Submit</button>
            </form>
            <Results movie={value} />
        </>
        
    )
}