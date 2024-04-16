import EstateCard from '../components/EstateCard';
const Estates = ({ data }) => {
	return (
        <div className='my-10 max-w-screen-2xl w-full mx-auto'>
            <div>
                <h2 className='text-3xl font-extrabold'>Available Estates</h2>
            </div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-3  mx-auto w-full'>
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
