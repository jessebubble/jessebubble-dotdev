import { Routes, Route, Outlet } from 'react-router-dom';
import LandingPage from './pageRoutes/LandingPage';
import About from './pageRoutes/About';
import Portfolio from './pageRoutes/Portfolio';
import Blog from './pageRoutes/Blog';
import PageNotFound from './pageRoutes/PageNotFound';

export default function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<ReactRoutes/>}>
                <Route index element={<LandingPage/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Route>
        </Routes>
        </>
    );
}

const ReactRoutes = () => {
    return (
        <Outlet />
    );
}