import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
//animate.css
import 'animate.css';
// Containers
import Full from './containers/Full/'
// const history = createBrowserHistory();
ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route path="/" name="Home" component={Full}/>
        </Switch>
    </HashRouter>
), document.getElementById('root'));
