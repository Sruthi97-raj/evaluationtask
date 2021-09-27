import React from 'react'
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
    const isAuthenticated = localStorage.getItem("Authentication");
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuthenticated === "true") {
                    return <Component {...props} />
                } else {
                    return (
                        <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />
                    );
                }
            }}
        />
    );
}
export default ProtectedRoute;