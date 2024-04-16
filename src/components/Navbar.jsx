import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
   
    const { user, logOut } = useContext(AuthContext);
    
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/homeloans">Home Loans</NavLink></li>
        {user && <li><NavLink to="/updateProfile">Update Profile</NavLink></li>}
        
    
    
    </>
	
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
					<ul className='menu menu-horizontal px-1'>
						{links}
					</ul>
				</div>
				<div className='navbar-end'>
					{user ? (
						<div className='relative group'>
							<div className='group flex'>
								<div className='btn group-hover:hidden btn-ghost btn-circle avatar'>
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
							<div className='hidden group-hover:flex absolute right-0 z-20 w-60 max-w-sm  flex-col justify-center p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100'>
								<img
									src={user?.photoURL}
									alt=''
									className='w-20 h-20 mx-auto rounded-full bg-gray-500 aspect-square'
								/>
								<div className='space-y-4 text-center divide-y divide-gray-700'>
									<div className='my-2 space-y-1 flex flex-col items-center'>
										<h2 className='text-xl font-semibold sm:text-2xl'>
											{user?.displayName}
										</h2>
										<p className='px-5 text-xs sm:text-base text-gray-400'>
											{user?.email}
										</p>
									</div>
                                </div>

								<Link
									className='btn btn-sm btn-secondary'
									onClick={handleSignOut}>
									Log Out
								</Link>
							</div>
						</div>
					) : (
						<Link
							to='/login'
							className='btn btn-sm btn-secondary'>
							Log in
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
