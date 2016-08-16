import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app.jsx';
import B from './b.jsx';
import A from  './a.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import AA from './aa.jsx';
import BB from './bb.jsx';
import AandB from  './add.jsx';

const router =
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={AandB}/>
            <Route path='a' component={A}/>
            <Route path='aa' component={AA}/>
            <Route path='bb' component={BB}/>
            <Route path='b' component={B}/>
            <Route path='aa' component={AA}/>
            <Route path='bb' component={BB}/>
        </Route>
    </Router>;

ReactDOM.render(
    router,
    document.getElementById('content')
);
