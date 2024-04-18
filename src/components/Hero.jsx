import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import 'swiper/swiper-bundle.css';
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
				spaceBetween={40}
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
Hero.propTypes = {
	data: PropTypes.array.isRequired
}
export default Hero;
