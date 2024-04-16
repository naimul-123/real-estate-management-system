import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../App';
import GeoLocation from '../components/GeoLocation';
import { AuthContext } from '../providers/AuthProvider';



const EstateDetails = () => {
	const { id } = useParams();
	const { user } = useContext(AuthContext)
	console.log(user);
	const estates = useContext(DataContext);
	const estate = estates.find((e) => e.id == id);

	const { estate_title, image, area, description, status, price, location, latitude, longitude  } = estate;
	
	return (
		<div>
			<div className=' flex flex-wrap rounded-md shadow-md  '>
				<div className=''>
					<img
						src={image}
						alt={estate_title}
						className='object-cover object-center w-full rounded-t-md  bg-gray-500'
					/>
				</div>

				<div className='flex flex-col justify-between p-6 space-y-8 items-stretch grow'>
					<div className='space-y-2 '>
						<h2 className='text-3xl font-semibold tracking-wide'>
							{estate_title}
						</h2>

						<p className=''>{description}</p>
					</div>
					<div className='flex justify-between  top-2 left-2 right-2'>
						<p className=' badge badge-primary'>For {status}</p>
						<p className=' badge badge-primary'> {price}</p>
					</div>
				</div>
			</div>
			<div>
				<GeoLocation location={location} latitude = {latitude} longitude= {longitude}></GeoLocation>
			</div>
		</div>
	);
};

export default EstateDetails;
