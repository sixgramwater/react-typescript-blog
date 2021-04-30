import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

interface NestedRouteProps extends RouteProps {
  routes?: Array<RouteProps>,
  component: React.ComponentType<any>,
}


const NestedRoute = (route: NestedRouteProps) => (
  <Route 
    exact={route.exact} 
    path={route.path} 

    // render={(props) =>
      
    // <route.component {...props} routes={route.routes} />}
  >
    {({match}) => (
      <CSSTransition
        in={match != null}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <route.component routes={route.routes} />
      </CSSTransition>
    )}
    {/* <route.component routes={route.routes} /> */}
  </Route>
)

export default NestedRoute;