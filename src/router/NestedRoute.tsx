import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface NestedRouteProps extends RouteProps {
  routes?: Array<RouteProps>,
  component: React.ComponentType<any>,
}


const NestedRoute = (route: NestedRouteProps) => (
  <Route 
    exact={route.exact} 
    path={route.path} 
    render={(props) =>
    <route.component {...props} routes={route.routes} />}
  />
)

export default NestedRoute;