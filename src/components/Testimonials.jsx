import { Swiper, SwiperSlide } from 'swiper/react';
import arrow from '/img/Arrow 4.png';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import PropTypes from 'prop-types';
const Testimonials = ({ testimonialsData }) => {

	return (

		<div className=' container p-0 sm:p-4 md:p-6 lg:p-12' data-aos="fade-up"
			data-aos-duration="2000" >
			<div className='my-10 md:my-20 w-full mx-auto'  >
				<p className=' text-blue-800 inline-flex gap-6 '>
					<img
						src={arrow}
						className='text-xl '
					/>{' '}
					<span className='text-2xl'>Our Clients</span>{' '}
				</p>
				<h2 className='font-bold text-3xl md:text-5xl'>Testimonial</h2>

			</div>
			<div data-aos="fade-up"
				data-aos-duration="2000">
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

		</div>


	);
};
Testimonials.propTypes = {
	testimonialsData: PropTypes.array.isRequired,
}
export default Testimonials;
