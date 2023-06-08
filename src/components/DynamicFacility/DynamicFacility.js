import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthorContext } from '../../App';

const DynamicFacility = () => {

    const author = useContext(AuthorContext);

    const dynamicFacility = useLoaderData();
    const { icon, title, desc } = dynamicFacility;

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const handleLike = () => {
        setLiked(!liked);
        setDisliked(false);
    }
    const handleDislike = () => {
        setDisliked(!disliked);
        setLiked(false);
    }
    return (
        <div className='p-5'>
            <i className={`bi ${icon} fs-1 text-danger mb-3 d-block`}></i>
            <h5 className='fw-bolder'>{title}</h5>
            <p className='text-muted my-3 px-2'>{desc}</p>
            <p><small>Author: {author}</small></p>

            {/* conditional rendering */}
            <p className="text-muted fw-semibold mt-4">
                Was it helpful?
                <i className={`bi bi-hand-thumbs-up-fill ms-2 $ ${liked && "text-primary"}`} onClick={handleLike}></i>
                <i className={`bi bi-hand-thumbs-down-fill ms-2 ${disliked && "text-danger"}`} onClick={handleDislike}></i>
            </p>


            <Link to="/" className='text-danger fw-semibold ms-2 mt-5 d-block'>
                &lt; Go Back To Home
            </Link>

        </div>
    );
};

export default DynamicFacility;