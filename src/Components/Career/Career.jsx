import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Career = () => {
    return (
        <div>
            <Header></Header>
            <div className="py-10 text-center">
            Career is coming .....
            <Link to={'/'} className="btn btn-success ml-6">Go Home</Link>
        </div>
        </div>
    );
};

export default Career;