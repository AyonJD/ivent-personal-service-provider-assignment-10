import React from 'react';
import useService from '../../../Hooks/useService';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services] = useService()
    // console.log(services);
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
            {
                services.map(service => <SingleService key={service.id} service={service}></SingleService>)
            }
        </div>
    );
};

export default Services;