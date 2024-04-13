import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LogIn = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="label mt-6  justify-center items-center gap-1 border-2 rounded-lg">
                            <span className="font-bold text-lg ">Continue with </span><FaGoogle></FaGoogle>
                        </div>
                        <div className="label  justify-center items-center gap-1 border-2 rounded-lg">
                            <span className="font-bold text-lg ">Continue with </span><FaGithub></FaGithub>
                        </div>
                        <div className="form-control mt-6">
                            <p>Are you new? Please <Link to='/register' className="link font-semibold link-secondary">Register here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;