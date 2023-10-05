import { useContext } from 'react';
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
                <Navbar></Navbar>
                <div className=' grid grid-cols-4 gap-5 pt-16'>
                    <div className=''>
                    <LeftSideNav></LeftSideNav>
                    </div>
                    <div className=' col-span-2'>
                    <NewsList></NewsList>
                    </div>
                    <div className=''>
                    <RightSideNav></RightSideNav>
                    </div>
                </div>
        </div>
    );
};

export default Home;