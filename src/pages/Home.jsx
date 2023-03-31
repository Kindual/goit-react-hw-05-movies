import { getTrending } from 'Api/Api';
import React, { Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export function Home() {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTrending();
            setMoviesList(response)
        }

        fetchData()
            .catch(console.error);
    }, []);



    return (
        <ul>
            {moviesList.map((movie) => {
                return <li key={movie.id}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Link to={`/movies/${movie.id}`} >{movie.title || movie.original_title || movie.name || 'name is out'}</Link>
                    </Suspense>
                </li>

            })}
        </ul>
    )
}

export default Home;
