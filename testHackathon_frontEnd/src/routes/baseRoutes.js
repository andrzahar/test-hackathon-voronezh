import Authorization from "../components/Authorization/Authorization.jsx";
import MainContainer from "../components/Main/MainContainer.js";
import { ROUTE_AUTH, ROUTE_MAIN_CONTAINER } from "./routes.js";

export const BASE_ROUTES = [
    {
        path: ROUTE_MAIN_CONTAINER,
        name: 'Главное меню',
        Element: MainContainer,
    },
]

export const AUTH_ROUTES = [
    {
        path: ROUTE_AUTH,
        name: 'Авторизация',
        Element: Authorization,
    },
]