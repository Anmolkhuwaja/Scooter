import React from 'react';
import boy from "../images/boy.png"

const Hero = () =>{
    return (
        <div className='container'>
        <div className='d-flex row justify-content-center align-items-center'>
            <div className='col-6'>
                <span className='display-6 fw-normal'>Fair price ride</span>
                <h1 className='display-4 fw-bold'>Rent our <span className='text'>Scooter</span></h1>
                <p className='text-body-secondary'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
            <div className='col-6 text-center'>
                <img src={boy} className='img-fluid' alt="" />
            </div>
        </div>
        </div>
    )
}

export default Hero