import Header from '../Header/Header';
import Navbar from '../Header/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import NewsList from '../NewsList/NewsList';
import RightSideNav from '../RightSideNav/RightSideNav';
import LatestNews from './LatestNews';

const Home = () => {
    return (
        <div>
                <Header></Header>
                <LatestNews></LatestNews>
                <Navbar></Navbar>
                <div className='border grid grid-cols-4 gap-5'>
                    <div className='border'>
                    <LeftSideNav></LeftSideNav>
                    </div>
                    <div className='border col-span-2'>
                    <NewsList></NewsList>
                    </div>
                    <div className='border'>
                    <RightSideNav></RightSideNav>
                    </div>
                </div>
        </div>
    );
};

export default Home;