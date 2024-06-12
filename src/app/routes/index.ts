import { Router } from "express";
import { AuthRoute } from "../modules/auth/auth.route";


const router = Router();

const moduleRoutes = [
    // {
    //     path: '/users',
    //     route: 
    // },
    
    // {
    //     path: '/admin',
    //     route: 
    // },
    {
        path: '/auth',
        route: AuthRoute,  
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router;
