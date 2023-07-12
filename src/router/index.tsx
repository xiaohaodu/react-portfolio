import { Navigate, RouteObject } from "react-router-dom";
const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to='/home'></Navigate>
    },
    {
        path: '/home',
        element: <></>
    }
];

export default routes;