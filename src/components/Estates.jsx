import EstateCard from '../components/EstateCard';
import arrow from '/img/Arrow 4.png';
const Estates = ({ data }) => {
	return (
		<div className='my-10 max-w-screen-2xl w-full mx-auto' data-aos="fade-up"
			data-aos-duration="2000">
			<div className='my-10 md:my-20'>
				<p className=' text-blue-800 inline-flex gap-6 '>
					<img
						src={arrow}
						className='text-xl '
					/>{' '}
					<span className='text-2xl'>Our Estates</span>{' '}
				</p>
				<h2 className='font-bold text-3xl md:text-5xl'>Our Available Estates</h2>

			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-3  mx-auto w-full' >
				{data &&
					data.map((estate) => (
						<EstateCard
							key={estate.id}
							estate={estate}></EstateCard>
					))}
			</div>
		</div>
	);
};

export default Estates;
