import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
