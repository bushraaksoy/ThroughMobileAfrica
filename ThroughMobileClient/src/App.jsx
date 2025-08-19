import { Suspense } from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';

function App() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
