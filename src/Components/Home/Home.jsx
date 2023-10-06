import Header from '../Header/Header';
import Navbar from '../Header/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import NewsList from '../NewsList/NewsList';
import RightSideNav from '../RightSideNav/RightSideNav';
import LatestNews from './LatestNews';

const Home = () => {
    
    return (
        <div className='pb-10'>
                <Header></Header>
                <LatestNews></LatestNews>
                <div className='sticky top-0 z-10'>
                <Navbar></Navbar>
                </div>
                <div className=' grid grid-cols-4 gap-5 pt-16'>
                    <div className='sticky top-20 h-screen hover:overflow-auto'>
                    <LeftSideNav></LeftSideNav>
                    </div>
                    <div className='col-span-2'>
                    <NewsList></NewsList>
                    </div>
                    <div className='sticky top-20 h-screen hover:overflow-auto'>
                    <RightSideNav></RightSideNav>
                    </div>
                </div>
        </div>
    );
};

export default Home;