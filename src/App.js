import React,{component} from 'react';
import {Route,Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

import routersIndex from './routes/Index/index'
import Login from './routes/Login/index'

class App extends React.Component {

    render() {
        return (
            <Switch>
                <Route path='/login' component={Login}/>
                <PrivateRoute path='/' component={routersIndex}/>
            </Switch>
        );
    }
}

export default App;