import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UserProfile = () => {
	const { user, logOut } = useContext(AuthContext);
	const handleSignOut = () => {
		logOut().then().catch();
	};

	return (
        <div className='hero min-h-screen bg-base-200'>
             
			<Helmet>
				<title>userprofile</title>
            </Helmet>
            
            <div className='hero-content flex-col lg:flex-row-reverse '>
               
				<div className='flex flex-col   justify-center   p-6 rounded-xl sm:px-12 text-gray-950'>
					
                    <img
						src={user?.photoURL}
						alt=''
						className='w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square'
					/>

					<div className='space-y-4 text-center divide-y divide-gray-700'>
						<div className='my-2 space-y-1'>
							<h2 className='text-xl font-semibold sm:text-2xl'>
								{user?.displayName}
							</h2>
							<p className='px-5 text-xs sm:text-base text-gray-400'>
								{user?.email}
							</p>
						</div>

						<Link
							className='btn btn-sm btn-secondary'
							onClick={handleSignOut}>
							Log Out
						</Link>
					</div>
				</div>
				<div className='card shrink-0 w-full shadow-2xl bg-base-100'>
					<div className='card-body'>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Name</span>
							</label>
							<input
								defaultValue={user.displayName}
								type='text'
								disabled
								className='input input-bordered'
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='text'
								disabled
								defaultValue={user?.email}
								className='input input-bordered'
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Photo Url</span>
							</label>
							<input
								type='text'
								defaultValue={user.photoURL}
								disabled
								className='input input-bordered'
							/>
						</div>

						
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
