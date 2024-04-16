import React from 'react';
import { Link } from 'react-router-dom';

const EstateCard = ({ estate }) => {
	const { id, estate_title, image, area, description, status, price } = estate;

	return (
		<div className=' flex flex-wrap rounded-md shadow-md  '>
			<div className='relative'>
				<div className='absolute flex justify-between  top-2 left-2 right-2'>
					<p className=' badge badge-primary'>For {status}</p>
					<p className=' badge badge-primary'> {price}</p>
				</div>
				<div className='w-full min-h-72'>
					<img
						src={image}
						alt={estate_title}
						className='object-cover object-center w-full h-full rounded-t-md'
					/>
				</div>
			</div>

			<div className='flex flex-col justify-between p-6 space-y-8 items-stretch grow'>
				<div className='space-y-2 '>
					<h2 className='text-3xl font-semibold tracking-wide'>
						{estate_title}
					</h2>
					<p className=''>{description}</p>
				</div>
				<Link
					to={`/estate/${id}`}
					type='button'
					className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-purple-600 text-gray-100'>
					View Property
				</Link>
			</div>
		</div>
	);
};

export default EstateCard;
