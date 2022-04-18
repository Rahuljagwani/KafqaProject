import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Header from './header';
import Counter from './Counter';
import Kform from './Form';

class Routes extends Component {

    render() {
        return (
            <HashRouter>
                <Header />
                <Switch>
                    <Route path="/Counter" component={Counter} />
                    <Route path="/" component={Kform} />
                </Switch>
            </HashRouter>
        )
    }
}

export default Routes;