import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const links = (
		<>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>
			<li>
				<NavLink to='/homeloans'>Home Loans</NavLink>
			</li>
			{user && (
				<li>
					<NavLink to='/updateProfile'>Update Profile</NavLink>
				</li>
			)}

			{!user && (
				<li>
					<NavLink to='/register'>Register</NavLink>
				</li>
			)}
		</>
	);

	const handleSignOut = () => {
		logOut().then().catch();
	};

	return (
		<>
			<div className='navbar bg-base-100'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<div
							tabIndex={0}
							role='button'
							className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52'>
							{links}
						</ul>
					</div>
					<Link
						to='/'
						className='btn btn-ghost text-xl'>
						HavenHunt
					</Link>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal space-x-2 px-1'>{links}</ul>
				</div>
				<div className='navbar-end'>
					{user ? (
						<div className=' flex items-center gap-2'>
							<Link
								to='/userprofile'
								className='group relative'>
								
									<img
										className='w-10 h-10 group-hover:hidden rounded-full'
										alt={user?.displayName}
										src={user?.photoURL}
									/>
								

								<p className='hidden text-xl font-bold text-gray-900 group-hover:inline'>
									{user?.displayName}
								</p>
							</Link>

							<Link
								className='btn hidden sm:inline-flex btn-sm btn-secondary'
								onClick={handleSignOut}>
								Log Out
							</Link>
						</div>
					) : (
						<div className='flex items-center justify-center gap-3'>
							<Link
								to='/login'
								className='btn btn-sm btn-primary'>
								Log in
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
