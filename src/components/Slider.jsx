import React from 'react';

const Slider = ({ singleData }) => {
   
    const { image, estate_title, description } = singleData;
    return (
        <div className='relative max-h-[80vh]'>
            <img className='w-full h-full' src={image} alt="" width="100%" height="100%" />
            <div className='absolute left-2 bottom-3  font-bold text-white z-10'>
                <h2 className='text-3xl'>{estate_title}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default Slider;