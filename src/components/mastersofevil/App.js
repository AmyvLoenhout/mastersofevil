import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './scss/foundation.scss';
import Projects from './components/projects/projects';
import projectDetail from './components/project-detail/project-detail';
import Header from './components/header/header';
import Error from './components/utils/error';

export default class App extends Component {

    render() {

        return (

            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Projects} />
                    <Route path="/project/:id" component={projectDetail} />
                    <Route path="*" component={Error} />
                </Switch>
            </BrowserRouter>

        );

    }

}