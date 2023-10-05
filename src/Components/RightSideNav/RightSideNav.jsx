import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const RightSideNav = () => {
    const {googleSignIn, GithubSignIn} = useContext(AuthContext);

    const handleGoogle = ()=>{
       googleSignIn()
       .then(re =>{
        console.log(re);
       })
       .catch(err=>{
        console.log(err);
       })
    }
    const handleGithub = ()=>{
        GithubSignIn()
        .then(result=>{
            console.log(result);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return (
        <div>
            <div className="">
                <h3 className="text-lg font-semibold text-[#403F3F] mb-5">Login With</h3>
                <div className="space-y-2">
                   <div>
                   
                        <button onClick={handleGoogle} className="btn btn-outline btn-primary rounded-md w-full btn-sm"><FaGoogle></FaGoogle> Login with google</button>
                   </div>

                   <div>
                   
                        <button onClick={handleGithub} className="btn btn-outline btn-neutral rounded-md w-full btn-sm"><FaGithub></FaGithub> Login with github</button>
                   
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

                <div className="mt-10">
                <h3 className="text-lg font-semibold text-[#403F3F] mb-5 underline">Q-Zone</h3>
                </div>
                <div className="space-y-5">
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;