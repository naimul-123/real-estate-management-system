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
		<div>
			<Helmet>
				<title>userprofile</title>
			</Helmet>
			<div className=' flex items-center justify-center min-h-screen w-full bg-base-200'>
				<div className='flex flex-col md:flex-row max-w-screen-lg min-h-[60vh] items-center justify-center gap-6 shadow-lg bg-base-100 rounded-xl'>
					<div className='flex flex-col justify-center   p-6 rounded-xl sm:px-12 text-gray-950'>
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
					<div className='card  w-full '>
						<form className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									defaultValue={user.displayName}
									type='text'
									disabled
									placeholder='Name'
									className='input text-gray-950 font-semibold input-bordered'
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
									placeholder='Photo url'
									className='input input-bordered'
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
