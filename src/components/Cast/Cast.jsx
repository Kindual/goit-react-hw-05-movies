import { getMovieCredits } from 'Api/Api';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export function Cast() {
    const { movieId } = useParams();
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getMovieCredits(movieId)
            setCredits(response)
        }

        fetchData().catch(console.error)
    }, [movieId]);

    return (
        <ul>
            {credits && credits.map(credit =>
                <li key={credit.credit_id}>
                    <img src={credit.profile_path ? `https://image.tmdb.org/t/p/w500${credit.profile_path}`
                        : 'https://st2.depositphotos.com/1185628/7482/v/600/depositphotos_74821573-stock-illustration-secret-service-agent-icon.jpg'}
                        height={'150px'} alt="credit" />
                    <p>Name {credit.original_name}</p>
                    <p>Character {credit.character}</p>
                </li>
            )}
        </ul>
    )
}

export default Cast;