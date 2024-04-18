import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../App';
import GeoLocation from '../components/GeoLocation';
import { FaChartArea } from 'react-icons/fa';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { MdBathroom, MdBedroomParent, MdOutlineBalcony } from 'react-icons/md';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { IoLocation } from 'react-icons/io5';
const EstateDetails = () => {
	const { id } = useParams();
	const estates = useContext(DataContext);
	const estate = estates.find((e) => e.id == id);
	// console.log(estate);

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
		<div className='rounded-md shadow-md p-10'>
			<div className='py-4'>
				<img
					src={image}
					alt={estate_title}
					className='object-cover object-center h-full w-full rounded-xl'
				/>
			</div>
			<div className='mx-auto w-full my-5 text-center'>
				<p className='text-xl md:text-2xl lg:3xl text-red-950 font-bold'>
					For {status} | {price} | {bedrooms} Bedrooms | {bathrooms} Bathrooms |{' '}
					{segment_name}{' '}
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch  gap-4  mx-auto justify-center'>
				<div className=' grow max-w-screen-sm '>
					<h2 className='text-2xl md:text-3xl text-center md:text-left font-bold text-gray-950 tracking-wide'>
						{estate_title}
					</h2>
					<p className='text-base'>{description}</p>
				</div>

				<div className='card max-w-screen-sm '>
					<div className='card-body'>

						<h2 className='card-title text-gray-900 text-2xl md:text-3xl font-bold'>
							Details information
						</h2>
						

						<p className='inline-flex items-center text-base gap-1'>
							{' '}
							<FaChartArea />
							{area}
						</p>
						<p className='inline-flex items-center text-base gap-1'>
							{' '}
							<BiSolidCategoryAlt />
							{segment_name}
						</p>
						<p className='inline-flex items-center text-base gap-1'>
							{' '}
							<MdBedroomParent />
							{bedrooms} {bedrooms > 1 ? 'bedromes' : 'bedroom'}
						</p>
						<p className='inline-flex items-center text-base gap-1'>
							{' '}
							<MdBathroom />
							{bathrooms} {bathrooms > 1 ? 'bathrooms' : 'bathroom'}
						</p>
						<p className='inline-flex items-center text-base gap-1'>
							<MdOutlineBalcony />
							{balconies} {balconies > 1 ? 'balconies' : 'balcony'}
						</p>
						<p className='inline-flex items-center text-base gap-1'>
							<IoLocation />
							{location}
						</p>

						<div>
							<h4 className='text-xl font-bold'>Facilities</h4>
							<ul>
								{facilities.map((facility, idx) => (
									<li key={idx}>
										{' '}
										<IoCheckmarkDoneOutline className='text-green-500 text-xl font-bold inline mr-2' />
										{facility}
									</li>
								))}
							</ul>
						</div>
						<div className='card-actions justify-start'>
							<button
								className='btn btn-primary'
								onClick={() =>
									document.getElementById('my_modal_5').showModal()
								}>
								Reqest for Ture
							</button>
						</div>
					</div>
				</div>
				<div className='w-full md:col-span-2 lg:col-span-1'>
					<GeoLocation
						location={location}
						latitude={latitude}
						longitude={longitude}></GeoLocation>
				</div>
			</div>

			<dialog
				id='my_modal_5'
				className='modal modal-middle'>
				<div className='modal-box relative'>
					<div className='modal-action absolute right-4 top-0'>
						<form method='dialog'>
							{/* if there is a button in form, it will close the modal */}
							<button className='btn btn-ghost'>Close</button>
						</form>
					</div>
					<section className='p-2 text-gray-900'>
						<form
							noValidate=''
							className=' w-full max-w-xl p-8 mx-auto space-y-6 rounded-md '>
							<h2 className='w-full text-3xl font-bold leading-tight'>
								Contact us
							</h2>
							<div>
								<label
									htmlFor='name'
									className='block mb-1 ml-1'>
									Name
								</label>
								<input
									id='name'
									type='text'
									placeholder='Your name'
									required=''
									className='block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-200'
								/>
							</div>
							<div>
								<label
									htmlFor='email'
									className='block mb-1 ml-1'>
									Email
								</label>
								<input
									id='email'
									type='email'
									placeholder='Your email'
									required=''
									className='block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-200'
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block mb-1 ml-1'>
									Message
								</label>
								<textarea
									id='message'
									type='text'
									placeholder='Message...'
									className='block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-200'></textarea>
							</div>
							<div>
								<button
									type='submit'
									className='w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-purple-700 focus:ring-violet-400 hover:ring-violet-400 text-gray-100'>
									Send
								</button>
							</div>
						</form>
					</section>
				</div>
			</dialog>
		</div>
	);
};

export default EstateDetails;
