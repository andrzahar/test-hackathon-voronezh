import { AUTH_ROUTES, BASE_ROUTES } from "../baseRoutes.js";

export const getRoutesByAuth = (user) => {
    if (user.token) {
        return BASE_ROUTES;
    }

    return AUTH_ROUTES;
}