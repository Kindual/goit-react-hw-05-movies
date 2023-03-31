import { getMovies } from 'Api/Api';
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';


export function Movies() {
    const [movies, setMovies] = useState([]);
    const input = useRef()
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchUrl = searchParams.get('query') || '';

    useEffect(() => {
        if (searchUrl) {
            input.current.value = searchUrl;
            (async () => {
                const response = await getMovies(input.current.value);
                setMovies(response.results)
            })()
        }
    }, [searchUrl]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await getMovies(input.current.value);
        setSearchParams({ query: input.current.value })
        setMovies(response.results)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name='name' type="text" ref={input} />
                <button type='submit'>Search</button>
            </form>

            {movies.length > 0 ? 
            (<ul>
                {movies.map(movie =>
                    <li key={movie.id}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Link to={`/movies/${movie.id}`} state={{ from: location }} >{movie.title || movie.original_title || movie.name || 'name is out'}</Link>
                        </Suspense>
                    </li>)
                }
            </ul>)
            : ''}
        </div>
    )
}

export default Movies;
