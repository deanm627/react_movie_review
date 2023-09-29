import styled from 'styled-components';

const OuterWrapper = styled.div`
    display: flex;
    width: 600px;
    height: 400px;
    color: charcoal;
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid gray;
    margin: 15px;

    img {
        height: 100%;
        width: 50%;
        border-right: 1px solid charcoal;
    }

    .movieInfo {
        display: flex;
        flex-wrap: wrap;
        width: 40%;
        margin: 0 0 0 20px;
        padding: 0;
    }

    .title {
        width: 100%;
        font-size: 2rem;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 0;
    }

    .year {
        font-size: 1.7rem;
        font-weight: 200;
        margin-top: 10px;
        margin-bottom: 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
        font-size: 0.8rem;
        align-self: flex-end;
    }


`

export const Results = ({movie}) => {
    if (!movie) {
        return;
    }
    return ( 
        <>
            <OuterWrapper>
                <div className="image"></div>
                <img src={movie.Poster} />
                <div className="movieInfo">
                    <p className="title">{movie.Title}</p>
                    <p className="year">{movie.Year}</p>
                    <p className="plot">{movie.Plot}</p>
                    <ul>
                        {movie.Ratings.map((rating, index) => 
                            <li key={index}>{rating.Source}: {rating.Value}</li>
                        )}
                    </ul>
                </div>
                
            </OuterWrapper>
        </>
    )
}