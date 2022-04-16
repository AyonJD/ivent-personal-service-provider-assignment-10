import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    return (
        <div className='custom-shadow'>

            <div className="max-w-sm  rounded-lg border">
                <Link to="#">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </Link>
                <div className="p-5">

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                </div>
            </div>

        </div>
    );
};

export default SingleService;