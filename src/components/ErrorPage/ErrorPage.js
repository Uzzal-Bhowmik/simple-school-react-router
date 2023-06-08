import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='text-center mt-5'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i className='text-danger'>{error.status}, {error.statusText}</i>
            </p>
            <Link to="/" className='text-danger fw-semibold ms-2 mt-5 d-block'>
                &lt; Go Back To Home
            </Link>
        </div>
    );
};

export default ErrorPage;