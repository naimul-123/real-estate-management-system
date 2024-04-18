import arrow from '/img/Arrow 4.png';

const Team = () => {
	return (
		<div className=''>
			<div className='my-10 md:my-20'>
				<p className=' text-blue-800 inline-flex gap-6 '>
					<img
						src={arrow}
						className='text-xl '
					/>{' '}
					<span className='text-2xl'>Our Team</span>{' '}
				</p>
				<h2 className='font-bold text-3xl md:text-5xl'>Our Fantastic Architecture</h2>
				<p className='font-light text-2xl max-w-sm'>
					A new dimension for the gold standerd in architecture
				</p>
			</div>
			<div className='flex flex-col md:flex-row gap-6 items-center my-4'>
				<div className=''>
					<img
						src='/img/team1.png'
                        alt=''
                        className='w-full'
					/>
				</div>
                <div className='w-full md:w-1/2 grow flex flex-col justify-between items-stretch gap-6'>
                    <div>
					<h3 className='text-2xl md:text-4xl font-semibold'>Dive Phonix</h3>
					<p className='text-lg text-blue-800'>Lead Engineer Of Building</p>
					<p className='text-lg'>
						Can you make it pop can you make the font bigger? nor I know
						somebody who can do this for a reasonable cost make it sexy you are
						lucky to even be doing this for us can you pimp this powerpoint,
						need more geometry patterns can you punch up the fun level on these
						icons. You might wanna give it another shot could you solutionize
						that for me, yet this is just a 5 minutes job. Start on it today and
						we will talk about what i want next time I got your invoice...it
						seems really high, why did you charge so much,
                    </p>
                    </div>

                    <div className='flex gap-2'>
                        <div><img src="/img/team2.png" alt="" /></div>
                        <div><img src="/img/team2.png" alt="" /></div>
                        <div><img src="/img/team2.png" alt="" /></div>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Team;
