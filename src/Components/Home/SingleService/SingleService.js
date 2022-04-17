import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleService = (props) => {
    const navigate = useNavigate();
    const { service, img, details, price } = props.service;
    return (
        <div className='custom-shadow py-10 rounded-md'>

            <div className="max-w-sm  rounded-lg border text-center">
                <img className="rounded-t-lg w-2/3 mx-auto" src={img} alt="" />
                <div className="p-5">
                    <h1>{service}</h1>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
                    <p>Price ${price}</p>

                </div>
                <button onClick={() => navigate('/checkout')} className='bg-[#F2A540] duration-500 hover:bg-[#c96304] px-4 py-2 rounded-full text-white'>Select Service</button>
            </div>

        </div>
    );
};

export default SingleService;