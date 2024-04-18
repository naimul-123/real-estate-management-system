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
		<div className='container flex flex-col justify-center items-center mx-auto'>
			<Helmet>
				<title>userprofile</title>
			</Helmet>

			<div className="card ">
				<figure className="px-10 pt-10">
					<img
						src={user?.photoURL}
						alt={user?.displayName}
						className='w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square'
					/>
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">{user?.displayName}</h2>
					<p>{user?.email}</p>
					<div className="card-actions">
						<Link
							className='btn btn-sm btn-secondary'
							onClick={handleSignOut}>
							Log Out
						</Link>
					</div>
				</div>
			</div>
		</div>

	);
};

export default UserProfile;
