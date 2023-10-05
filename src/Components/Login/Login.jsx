import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();

        // evabe korete pari 
        // const email = e.target.password.value;
        // console.log(email);

        //evabe korar try korbo
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        // log in 
        signIn(email,password)
        .then(result=>{
            console.log(result);
            
            navigate(location?.state ? location.state : '/');
        })
        .catch(err=>{
            console.log(err);
         alert("Please register your account. ");
           
        })


    }

    return (
        <div>
            <div className="mb-5">
            <Navbar></Navbar>
            </div>
            <div className="hero h-[600px] bg-base-200 -mt-24 ">
                <div className="hero-content  w-3/4">
                    <div className="card rounded-none  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h3 className="text-center font-semibold text-xl py-2">Login Your Account</h3>
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
                                <button type="submit" className="btn btn-neutral rounded-none">Login</button>
                            </div>
                        <h3 className="mt-3">Do you have any account?<Link to={'/register'}> <span className="text-red-400  font-semibold ">Register</span></Link></h3>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;