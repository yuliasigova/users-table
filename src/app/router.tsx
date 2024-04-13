import {createBrowserRouter} from "react-router-dom";
import {AddProfile} from "../pages/addProfile/AddProfile";
import {ChangeProfile} from "../pages/changeProfile/ChangeProfile";
import {UsersProfile} from "../pages/userProfile/UserProfile";
import {UsersTable} from "../pages/mainPage/UsersTable";
import {Layout} from "../pages/layout/Layout";
import {AppRoute} from "./types";
import { NotFoundPage } from "../pages/notFound/NotFoundPage";

export const router = createBrowserRouter([

    {
        path: AppRoute.Main,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <UsersTable/>,
            },
            {
                path: AppRoute.Profile,
                element: <UsersProfile/>
            },
            {
                path: AppRoute.AddProfile,
                element: <AddProfile/>
            },
            {
                path: AppRoute.ChangeProfile,
                element: <ChangeProfile/>
            },
            {
                path: '*',
                element: <NotFoundPage/>
            },
            
]}]);
