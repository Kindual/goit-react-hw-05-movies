import React, { Suspense, useEffect, useState } from 'react'
import { getMovie } from 'Api/Api';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'

export function MovieDetails() {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getMovie(movieId);
            setMovie({ ...response.data })
        }

        fetchData().catch(console.error)

    }, [setMovie, movieId]);

    return (
        <>
            <div>
                <Link to={location.state?.from ? location.state.from : '/'} > Go back</Link>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" height={'250px'} />
                <h2>{`${movie.original_title}`}</h2>
                <p>User score: {`${movie.vote_average ? movie.vote_average.toFixed(1) : 'No votes'}`}</p>
                <ul>
                    <li>
                        <h3>Overview</h3>
                        <p>{`${movie.overview || 'No overviews'}`}</p>
                    </li>
                    <li>
                        <h3>Genres</h3>
                        <p>{movie.genres > 0 ? movie.genres.map(genre => `${genre.name}`).join(', ') : '---'}</p>
                    </li>
                </ul>
            </div>
            <div>
                <p>Addictional info</p>
                <ul>
                    <li>
                        <Link to='cast' > Cast </Link>
                    </li>
                    <li>
                        <Link to='reviews' > Revievs </Link>
                    </li>
                </ul>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet></Outlet>
                </Suspense>
            </div>

        </>
    )
}

export default MovieDetails