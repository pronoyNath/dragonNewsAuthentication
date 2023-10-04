import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className='poppins max-w-6xl mx-auto border'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;