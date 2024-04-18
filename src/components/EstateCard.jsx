import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const EstateCard = ({ estate }) => {
	const { id, estate_title, image, segment_name, area, bedrooms, bathrooms, description, status, price } = estate;

	return (

		<div className="card max-w-screen-sm bg-base-100 shadow-xl" data-aos="fade-up"
			data-aos-duration="2000">
			<figure className='h-72'><img src={image} alt={estate_title} className='h-full' /></figure>
			<div className="card-body">
				<div className='mx-auto w-full my-5 text-center'>
					<p className='text-lg text-red-950 font-bold'>
						{segment_name} |  {area} |  {bedrooms} Bedrooms | {bathrooms} Bathrooms |
						{price}  For {status}
					</p>
				</div>
				<h2 className="card-title">{estate_title}</h2>
				<p>{description}</p>
				<div className="card-actions justify-center">

					<Link
						to={`/estate/${id}`}
						className=' w-full p-3 text-center font-semibold tracking-wide rounded-md bg-purple-600 text-gray-100'

					>
						View Property
					</Link>

				</div>
			</div>
		</div>



	);
};
EstateCard.propTypes = {
	estate: PropTypes.object.isRequired
}
export default EstateCard;
