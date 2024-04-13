
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form"

const Register = () => {
    const [error, setError] = useState([]);
    const [isShow, setIsShow] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handelRegister = () => {
        

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit((data) => { console.log(data) })}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register('name', { required: 'Name must be required.' })} placeholder="Name" className="input input-bordered" />
                            {errors.name?.message && <p className='text-red-600'> {errors.name.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" {...register('photo', { required: 'photo must be required.' })} placeholder="Photo url" className="input input-bordered" />
                            {errors.photo?.message && <p className='text-red-600'> {errors.photo.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register('email', { required: 'Email must be required.' })} placeholder="email" className="input input-bordered" />
                            {errors.email?.message && <p className='text-red-600'> {errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="input input-bordered flex items-center gap-2">
                                <input type={isShow ? "text" : "password"} {...register('password',  {required: 'Password must be required.', minLength: { value: 6, message: 'Password must be atleast 6 charecters' }, validate: {
            uppercase: value => /[A-Z]/.test(value) || "Password must contain at least one uppercase letter.",
            lowercase: value => /[a-z]/.test(value) || "Password must contain at least one lowercase letter."
          } })} placeholder="password" className="grow" />
                                <span className='badge' onClick={() => setIsShow(!isShow)}>{isShow ? <FaEyeSlash /> : <FaEye />}</span>

                            </div>
                            {errors.password?.message && <p className='text-red-600'> {errors.password.message}</p>}

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <p>Already have an account? Please <Link to='/login' className="link font-semibold link-secondary">Login here</Link></p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;