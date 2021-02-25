import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { AsientosPage } from '../pages/AsientosPage';
import { Home } from '../pages/home';

export const AppRouter = () => {
    return (

        <Router>
            <div>
                <Switch>
                    <Route path='/home' ><Home/></Route>
                    <Route path='/asientos' ><AsientosPage/></Route>
                    <Redirect to='/home' />
                </Switch>
            </div>
        </Router>
    )
}
