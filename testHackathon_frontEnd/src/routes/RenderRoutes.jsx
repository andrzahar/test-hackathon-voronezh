import { useMemo } from "react";
import { getRoutesByAuth } from "./common/getRoutesByAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_AUTH, ROUTE_MAIN_CONTAINER } from "./routes.js";
import { getAuthUser } from "./selectors/authSelector.js";
import { connect } from "react-redux";

const RenderRoutesWithoutStore = ({ user }) => {

    const routesByAuth = useMemo(
        () => getRoutesByAuth(user), [user],
    );
    const baseRoute = useMemo(
        () => (!!user?.id ?  ROUTE_MAIN_CONTAINER : ROUTE_AUTH),
        [user?.id],
    );

    return (
      <Routes>
          {routesByAuth.map(item => (
            <Route key={item.path} path={item.path} element={<item.Element />} />
          ))}
          <Route path="*" element={<Navigate to={baseRoute} replace />} />
      </Routes>
    );
};

const mapStateToProps = (state) => ({
    user: getAuthUser(state),
});

export const RenderRoutes = connect(mapStateToProps)(RenderRoutesWithoutStore);