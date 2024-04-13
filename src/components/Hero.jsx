import React, { useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

import { DataContext } from '../App';
import Slider from './Slider';

const Hero = () => {
    const data = useContext(DataContext);
    // console.log(data)

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {data && data.map((singleData, idx) => (<SwiperSlide key={idx}><Slider singleData={singleData} ></Slider></SwiperSlide>))}

            </Swiper>
        </>
    );
};

export default Hero;