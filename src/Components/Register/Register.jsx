import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();

        // evabe korete pari 
        // const email = e.target.password.value;
        // console.log(email);

        //evabe korar try korbo
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password);

        // creating user 
        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div>
            <div>
                <div className="mb-5">
                    <Navbar></Navbar>
                </div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content w-3/4">
                        <div className="card rounded-none  w-full shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <h3 className="text-center font-semibold text-xl py-2">Register Your Account</h3>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered rounded-none" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered rounded-none" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered rounded-none" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-neutral rounded-none">Register</button>
                                </div>
                                <h3 className="mt-3">Already have an account?<Link to={'/login'}> <span className="text-red-400  font-semibold ">Login</span></Link></h3>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;