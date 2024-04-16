import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LogIn = () => {
	const [isShow, setIsShow] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const notify = () =>
		toast('Successfully loged in!', {
			position: 'top-center',
		});
	const googleNotify = () =>
		toast('Successfully loged in with google!', {
			position: 'top-center',
		});
	const githubNotify = () =>
		toast('Successfully loged in with github!', {
			position: 'top-center',
		});

	// console.log('location from login', location.state);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
	const handleLogin = (data) => {
		const email = data.email;
		const password = data.password;
		signIn(email, password)
			.then(notify())
			.then(() => navigate(location?.state ? location.state : '/'))
			.catch(() =>
				setErrorMsg(
					'Email or password is not correct. please give correct email and password',
				),
			);
	};
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then(() => {
				googleNotify();
				setTimeout(
					() => navigate(location?.state ? location.state : '/'),
					1000,
				);
			})

			.catch((error) => console.log(error));
	};
	const handleGithubSignIn = () => {
		githubSignIn()
			.then(() => {
				githubNotify();
				setTimeout(
					() => navigate(location?.state ? location.state : '/'),
					1000,
				);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div>
			<ToastContainer autoClose={1000} />
			<Helmet>
				<title>Login</title>
			</Helmet>
			<div className='hero min-h-[80vh] bg-base-200'>
				<div className='hero-content flex-col'>
					<div className='text-center'>
						<h1 className='text-5xl font-bold'>Login now!</h1>
					</div>
					<div className='card shrink-0 w-full max-w-lg shadow-2xl bg-base-100'>
						<form
							className='card-body'
							onSubmit={handleSubmit((data) => handleLogin(data))}>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='email'
									{...register('email', {
										required: 'Email must be required.',
									})}
									placeholder='email'
									className='input input-bordered'
								/>
								{errors.email?.message && (
									<p className='text-red-600'> {errors.email.message}</p>
								)}
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<div className='input input-bordered flex items-center gap-2'>
									<input
										type={isShow ? 'text' : 'password'}
										{...register('password', {
											required: 'Password must be required.',
											minLength: {
												value: 6,
												message: 'Password must be atleast 6 charecters',
											},
											validate: {
												uppercase: (value) =>
													/[A-Z]/.test(value) ||
													'Password must have at least one uppercase letter.',
												lowercase: (value) =>
													/[a-z]/.test(value) ||
													'Password must have at least one lowercase letter.',
											},
										})}
										placeholder='password'
										className='grow'
									/>
									<span
										className='badge'
										onClick={() => setIsShow(!isShow)}>
										{isShow ? <FaEyeSlash /> : <FaEye />}
									</span>
								</div>
								{errors.password?.message && (
									<p className='text-red-600'> {errors.password.message}</p>
								)}
								{errorMsg && <p className='text-red-600'> {errorMsg}</p>}
							</div>
							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Login</button>
							</div>
							<div
								onClick={handleGoogleSignIn}
								className='label mt-6  justify-center items-center gap-1 border-2 rounded-lg'>
								<span className='font-bold text-lg '>Continue with </span>
								<FaGoogle></FaGoogle>
							</div>
							<div
								onClick={handleGithubSignIn}
								className='label  justify-center items-center gap-1 border-2 rounded-lg'>
								<span className='font-bold text-lg '>Continue with </span>
								<FaGithub></FaGithub>
							</div>
							<div className='form-control mt-6'>
								<p>
									Are you new? Please{' '}
									<Link
										to='/register'
										className='link font-semibold link-secondary'>
										Register here
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
