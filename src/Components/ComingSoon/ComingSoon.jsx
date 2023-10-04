import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const ComingSoon = () => {
    return (
        <div className='text-center'>
             <Header></Header>
            <h3 className='text-3xl font-bold'>Page is coming soon...</h3>
            <Link to={'/'} className="btn btn-success ml-6 mt-10">Go Home</Link>
        </div>
    );
};

export default ComingSoon;