import React from 'react';
import { Link } from 'react-router-dom';

const ClgFacility = ({ facility }) => {
    const { icon, title, desc } = facility;
    return (
        <div className='rounded-3 shadow p-3'>
            <i className={`bi ${icon} fs-1 text-danger mb-3 d-block`}></i>
            <h5 className='fw-bolder'>{title}</h5>
            <p className='text-muted my-3 px-2'>{desc}</p>
            <Link to={`/facility/${title}`} className='text-danger text-decoration-none fw-semibold'>
                View More  -&gt;
            </Link>

        </div>
    );
};

export default ClgFacility;