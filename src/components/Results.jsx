import { UserReview } from './UserReview.jsx';
import styled from 'styled-components';

const OuterWrapper = styled.div`
    background-color: #eaeaea;
    display: flex;
    width: 600px;
    height: 450px;
    color: charcoal;
    border: 1px solid charcoal;
    margin: 30px auto;
    filter: drop-shadow(0 0 15px gold);

    img {
        height: 100%;
        width: 50%;
    }

    .movieInfo {
        display: flex;
        flex-wrap: wrap;
        width: 45%;
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

export const Results = ({movies}) => {
    if (!movies) {
        return;
    }

    return ( 
        <>
            {movies.map((movie, index) => 
                <OuterWrapper key={index}>
                    <img src={movie.Poster} />
                    <div className="movieInfo">
                        <p className="title">{movie.Title}</p>
                        <p className="year">{movie.Year}</p>
                        <p className="plot">{movie.Plot}</p>
                        <ul>
                            {movie.Ratings.map((rating, index) => 
                                <li key={index}>{rating.Source}: {rating.Value}</li>
                            )}
                            <UserReview />
                        </ul>
                    </div>
                </OuterWrapper>
            )};
        </>
    )
}