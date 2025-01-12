import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';


import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProfile = () => {
	const notify = () =>
		toast('User profile updated successfully!', {
			position: 'top-center',
		});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	const { user, updateUser, logOut } = useContext(AuthContext);
	const handleSignOut = () => {
		logOut().then().catch();
	};
	const handleUpdateUser = (data) => {
		const name = data.name;
		const photoUrl = data.photo;
		updateUser(name, photoUrl)
			.then(() => {
				notify();
				setTimeout(
					() => navigate('/'),
					2000,
				);
			})
			.catch((error) => console.log(error.message));
	};

	return (
		<div>
			<ToastContainer autoClose={1000} />
			<Helmet>
				<title>updateProfile</title>
			</Helmet>

			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
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
					<div className="card shrink-0 w-full shadow-2xl bg-base-100">
						<form
							className='card-body'
							onSubmit={handleSubmit((data) => {
								handleUpdateUser(data);
							})}>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									defaultValue={user.displayName}
									type='text'
									{...register('name', { required: 'Name must be required.' })}
									placeholder='Name'
									className='input input-bordered'
								/>
								{errors.name?.message && (
									<p className='text-red-600'> {errors.name.message}</p>
								)}
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
									{...register('photo', {
										required: 'photo must be required.',
									})}
									placeholder='Photo url'
									className='input input-bordered'
								/>
								{errors.photo?.message && (
									<p className='text-red-600'> {errors.photo.message}</p>
								)}
							</div>

							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Update</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateProfile;
