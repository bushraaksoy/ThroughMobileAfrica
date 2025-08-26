import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import NavTest from '../components/Navbar/NavTest';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
            {/* <NavTest /> */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
