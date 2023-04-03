import { Routes, Route, Outlet } from 'react-router-dom';
import LandingPage from './pageRoutes/LandingPage';
import PageNotFound from './pageRoutes/PageNotFound';

export default function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<ReactRoutes/>}>
                <Route index element={<LandingPage/>} />
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