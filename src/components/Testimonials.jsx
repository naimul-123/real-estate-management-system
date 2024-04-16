import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';

const Testimonials = ({ testimonialsData }) => {

	return (
		<div className='bg-gray-500 container p-0 sm:p-4 md:p-6 lg:p-24'>
			<h2 className='text-4xl text-gray-100 font-semibold text-center  my-5'>
				Testimonials
			</h2>
			<Swiper
				navigation={true}
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[Navigation, EffectCoverflow, Pagination]}
				className='mySwiper'>
				{testimonialsData &&
					testimonialsData.map((testimonial, idx) => (
						<SwiperSlide key={idx}>
							<TestimonialCard testimonial={testimonial}></TestimonialCard>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default Testimonials;
