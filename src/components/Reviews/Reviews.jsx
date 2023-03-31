import { getMovieReview } from 'Api/Api';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getMovieReview(movieId);
            setReviews(response)
        }

        fetchData().catch(console.error)

    }, [movieId]);

    return (
        reviews.length > 1 ?
            (<div>
                <ul>
                    {reviews.map(review =>
                        <li key={review.id}>
                            <p>Author: {review.author}</p>
                            <p>{review.content}</p>
                        </li>
                    )}
                </ul>
            </div>)
        : `No reviews`
    )
}

export default Reviews;