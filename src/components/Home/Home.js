import React from 'react';
import "./Home.css";
import { useLoaderData } from 'react-router-dom';
import ClgFacility from '../ClgOption/ClgFacility';

const Home = () => {

    // clg options data
    const { clgFacilities } = useLoaderData();


    return (
        <div>
            {/* Hero Section */}
            <section className='hero-section'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner text-white">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <h1 className='fw-bolder'>Language Courses</h1>
                            <p className='fs-1'>For You</p>
                            <div className='mt-5'>
                                <button className="btn btn-danger rounded-pill me-3">APPLY TODAY</button>
                                <button className="btn btn-outline-light rounded-pill">GET QUOTA</button>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <h1 className='fw-bolder'>Become Fluent</h1>
                            <p className='fs-1'>In Italian</p>
                            <div className='mt-5'>
                                <button className="btn btn-danger rounded-pill me-3">APPLY TODAY</button>
                                <button className="btn btn-outline-light rounded-pill">GET QUOTA</button>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <h1 className='fw-bolder'>Learn German</h1>
                            <p className='fs-1'>In Germany</p>
                            <div className='mt-5'>
                                <button className="btn btn-danger rounded-pill me-3">APPLY TODAY</button>
                                <button className="btn btn-outline-light rounded-pill">GET QUOTA</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* --------------------------------------------------------- */}


            {/* College Facilities Section */}
            <section>

                <div className='container facilities'>
                    {
                        clgFacilities.map(facility => <ClgFacility
                            key={facility.id}
                            facility={facility}
                        />)
                    }
                </div>
            </section>
            {/* ---------------------------------------------------------- */}
        </div>
    );
};

export default Home;