import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hook/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, isLoading, admin} = useAuth();
    if(isLoading){
      return <Spinner animation="border" />
    }
    return (
    <Route
       {...rest}
       render={({ location }) => admin && user?.email ? children : <Redirect
       to={{
        pathname: "/",
        state: { from: location }
      }}
       ></Redirect>
      }
    >

    </Route>
    );
};

export default AdminRoute;