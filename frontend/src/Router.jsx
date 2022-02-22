import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/sign-in'} component={SignIn} />
                <Route exact path={'/sign-up'} component={SignUp} />
            </Switch>
        </>
    );
};
export default Router;
