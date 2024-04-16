import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
	const [isShow, setIsShow] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	const { user, createUser, logOut } = useContext(AuthContext);
	const handleSignOut = () => {
		logOut().then().catch();
	};
    const handelRegister = (data) => {

        const name = data.name;
        const photoUrl = data.photo;
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl,
        }
                
        )
            

            .then(() => navigate('/'));
        
    }

	return (
		<div>
			<Helmet>
				<title>updateProfile</title>
			</Helmet>
			<div className='hero min-h-[80vh] w-full bg-base-200'>
				<div className='flex items-center justify-between flex-col lg:flex-row lg:gap-2'>
					<div className=' flex flex-col items-center text-center w-full max-w-md'>
						<img
							src={user?.photoURL}
							alt=''
							className='w-20 h-20 mx-auto rounded-full bg-gray-500 aspect-square'
						/>

						<div className='space-y-2'>
							<h2 className='text-xl font-semibold sm:text-2xl'>
								{user?.displayName}
							</h2>
							<p className='px-5 text-xs sm:text-base text-gray-400'>
								{user?.email}
							</p>

							<Link
								className='btn btn-sm btn-secondary'
								onClick={handleSignOut}>
								Log Out
							</Link>
						</div>
					</div>
					<div className='card shrink-0 w-full max-w-md shadow-2xl bg-base-100'>
						<form
							className='card-body'
							onSubmit={handleSubmit((data) => {
								handelRegister(data);
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
