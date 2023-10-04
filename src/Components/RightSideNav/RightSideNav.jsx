import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RightSideNav = () => {
    return (
        <div>
            <div className="py-10">
                <h3 className="text-lg font-semibold text-[#403F3F] mb-5">Login With</h3>
                <div className="space-y-2">
                   <div>
                   <Link to={'/login'}>
                        <button className="btn btn-outline btn-primary rounded-md w-full btn-sm"><FaGoogle></FaGoogle> Login with google</button></Link>
                   </div>

                   <div>
                   <Link to={'/login'}>
                        <button className="btn btn-outline btn-neutral rounded-md w-full btn-sm"><FaGithub></FaGithub> Login with github</button>
                    </Link>
                   </div>
                </div>
                <div className="mt-10">
                <h3 className="text-lg font-semibold text-[#403F3F] mb-5">Find Us On</h3>

                <div>
                    <div className="flex gap-2 items-center pl-5 py-2 text-lg rounded-t-lg border">
                        <FaFacebook></FaFacebook> <p>Facebook</p>
                    </div>
                    <div className="flex gap-2 items-center pl-5 border-x py-2 text-lg">
                        <FaTwitter></FaTwitter> <p>Twitter</p>
                    </div>
                    <div className="flex gap-2 items-center pl-5 border rounded-b-lg py-2 text-lg">
                        <FaInstagram></FaInstagram> <p>Instagram</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;