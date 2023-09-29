import { useState } from 'react';
import { Results } from './Results';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;

    input {
        background: #eaeaea;
        height: 2rem;
        font-size: 1.2rem;
        width: 300px;
    }

    button {
        height: 2rem;
        font-size: 1.2rem;
        margin-left: 15px;
    }
`

export const Form = () => {
    const [movie, setMovie] = useState("");
    const [values, setValues] = useState([]);

    async function getMovieInfo() {
        const url = `http://www.omdbapi.com/?t=${movie}&apikey=55fd11b0`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const movieArray = values.slice();
        movieArray.push(data);
        setValues(movieArray);
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
            <Wrapper>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text' 
                        onChange={handleChange} 
                        value={movie}
                        placeholder='Type movie name here'
                    />
                    <button type='submit'>Submit</button>
                </form>
            </Wrapper>
            <Results movies={values} />
        </>
        
    )
}