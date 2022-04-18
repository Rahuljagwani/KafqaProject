import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './header';
import Counter from './Counter';
import Kform from './Form';

class Routes extends Component {

    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL }>
                <Header />
                <Switch>
                    <Route path="/KafqaProject/Counter" component={Counter} />
                    <Route path="/KafqaProject" component={Kform} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;