import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import App from './App';
import Login from './Login';
import { BrowserRouter, Route, Redirect, Switch, useHistory, Link, useLocation } from 'react-router-dom';

const Router = () => {



    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <App /> : <Redirect to="/login"></Redirect>
                    </Route>
                    <Route exact path="/login">
                        <Login /> :
                            <Redirect to="/" />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Router;
