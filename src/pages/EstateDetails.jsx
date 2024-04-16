import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../App';
import GeoLocation from '../components/GeoLocation';
import { AuthContext } from '../providers/AuthProvider';

const EstateDetails = () => {
	const { id } = useParams();
	const { user } = useContext(AuthContext);
	// console.log(user);
	const estates = useContext(DataContext);
	const estate = estates.find((e) => e.id == id);
	console.log(estate);

	const {
		estate_title,
		image,
		area,
		description,
		bedrooms,
		bathrooms,
		balconies,
		segment_name,
		status,
		price,
		facilities,
		location,
		latitude,
		longitude,
	} = estate;

	return (
		<div className='rounded-md shadow-md mb-9'>
			<div className=' flex flex-wrap   '>
				<div className='py-4'>
					<img
						src={image}
						alt={estate_title}
						className='object-cover object-center w-full'
					/>
				</div>
				<div className='mx-auto w-full my-5 text-center'>
					<p className='text-xl md:text-2xl lg:3xl text-red-950 font-bold'>
						For {status} | {price} | {bedrooms} Bedrooms | {bathrooms} Bathrooms
						| {segment_name}{' '}
					</p>
				</div>

				<div className='flex flex-col md:flex-row gap-4 p-10 w-full mx-auto justify-center'>
					<div className='space-y-4 shrink max-w-md  '>
						<h2 className='text-2xl md:text-3xl text-center md:text-left font-bold text-gray-950 tracking-wide'>
							{estate_title}
						</h2>
						<p className='text-base'>{description}</p>

					</div>
					<div className='overflow-x-auto shrink-0'>
						<table className='table table-zebra border-collapse border border-slate-400 max-w-lg'>
							{/* head */}
							<thead>
								<tr>
									<th className='text-2xl '>Details</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th className='border border-slate-400'>Address</th>
									<td className='border border-slate-400'>{location}</td>
								</tr>
								<tr>
									<th className='border border-slate-400'>Area</th>
									<td className='border border-slate-400'>{area}</td>
								</tr>
								<tr>
									<th className='border border-slate-400'>Listed For</th>
									<td className='border border-slate-400'>{price}</td>
								</tr>
								<tr>
									<th className='border border-slate-400'>Bedrooms</th>
									<td className='border border-slate-400'>{bedrooms}</td>
								</tr>
								<tr>
									<th className='border border-slate-400'>Bathrooms</th>
									<td className='border border-slate-400'>{bathrooms}</td>
								</tr>
								<tr>
									<th className='border border-slate-400'>Balconies</th>
									<td className='border border-slate-400'>{balconies}</td>
								</tr>
								<tr>
									<th className='border border-slate-400'>Facilities</th>
									<td className='border border-slate-400'>
										{facilities.join(', ')}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<GeoLocation
				location={location}
				latitude={latitude}
				longitude={longitude}></GeoLocation>
		</div>
	);
};

export default EstateDetails;
