import React from 'react';

const Slider = ({ singleData }) => {
    console.log(singleData)
    const { image, estate_title, description } = singleData;
    return (
        <div className='relative max-h-[80vh]'>
            <img className='' src={image} alt="" />
            <div className='absolute left-2 bottom-3  font-bold text-white z-10'>
                <h2 className='text-3xl'>{estate_title}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default Slider;