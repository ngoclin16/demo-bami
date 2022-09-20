import Dashboard from '../pages/Dashboard';
import Market from '../pages/Market';
import Profile from '../pages/Profile';
import Connect from '../pages/Connect';


//Public Routes
const publicRoutes = [
    { path: '/', component: Dashboard },
    { path: '/market', component: Market },
    { path: '/profile', component: Profile },
    { path: '/connect', component: Connect, layout : null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };