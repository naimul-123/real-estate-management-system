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
							className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
							{links}
						</ul>
					</div>
					<Link
						to='/'
						className='btn btn-ghost text-xl'>
						HaventHunt
					</Link>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal space-x-2 px-1'>{links}</ul>
				</div>
				<div className='navbar-end'>
					{user ? (
						<div className=' flex items-center gap-2'>
							<div className='group'>
								<div className='btn hidden min-[425px]:block group-hover:hidden btn-ghost btn-circle avatar'>
									<div className='w-10  rounded-full'>
										<img
											className=''
											alt='Tailwind CSS Navbar component'
											src={user?.photoURL}
										/>
									</div>
								</div>
								<p className='hidden text-xl font-bold text-gray-900 group-hover:block'>
									{user?.displayName}
								</p>
							</div>

							<Link
								className='btn btn-sm btn-secondary'
								onClick={handleSignOut}>
								Log Out
							</Link>
						</div>
					) : (
						<div className='flex items-center justify-center gap-3'>
							<Link
								to='/login'
								className='btn btn-sm btn-secondary'>
								Log in
							</Link>
							<Link
								to='/register'
								className='btn btn-sm btn-secondary'>
								Register
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
