import React, { useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// import required modules
import {
	Autoplay,
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
} from 'swiper/modules';

import Slider from './Slider';

const Hero = ({ data }) => {
	return (
		<>
			<Swiper
				navigation
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				// onSlideChange={() => console.log('slide change')}
				// onSwiper={(swiper) => console.log(swiper)}
				className='mySwiper'>
				{data &&
					data.map((singleData, idx) => (
						<SwiperSlide key={idx}>
							<Slider singleData={singleData}></Slider>
						</SwiperSlide>
					))}
			</Swiper>
		</>
	);
};

export default Hero;
