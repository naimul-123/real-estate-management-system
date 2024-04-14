import React from 'react';

const EstateCard = ({ estate }) => {
	const { estate_title, image, area, description, status, price } = estate;

	return (
		<div className=' flex flex-wrap rounded-md shadow-md  '>
			<div className='relative'>
				<div className='absolute flex justify-between  top-2 left-2 right-2'>
					<p className=' badge badge-primary'>For {status}</p>
					<p className=' badge badge-primary'> {price}</p>

				</div>

				<img
					src={image}
					alt={estate_title}
					className='object-cover object-center w-full rounded-t-md h-72 bg-gray-500'
				/>
			</div>

			<div className='flex flex-col justify-between p-6 space-y-8 items-stretch grow'>
				<div className='space-y-2 '>
					<h2 className='text-3xl font-semibold tracking-wide'>
						{estate_title}
					</h2>
					<p className=''>{description}</p>
				</div>
				<button
					type='button'
					className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-purple-600 text-gray-100'>
					View Property
				</button>
			</div>
		</div>
	);
};

export default EstateCard;
