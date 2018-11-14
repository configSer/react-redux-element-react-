import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter , Route , Switch , Redirect } from 'react-router-dom'
import './static/css/rem.css';
import './static/css/reset.css';
import './static/css/flex.css';
import './index.css';
import Home from './home/home';
import Login from './login/login';
import One from './iconList/one'
import Eight from "./iconList/eight";
import Seven from "./iconList/seven";
import Six from "./iconList/six";
import Five from "./iconList/five";
import Four from "./iconList/four";
import Three from "./iconList/three";
import Two from "./iconList/two";
import reducers from './store/index';
import * as serviceWorker from './serviceWorker';

const store = createStore( reducers , applyMiddleware( thunk ) );

ReactDOM.render(
  (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route path='/one' component={One}/>
          <Route path='/two' component={Two}/>
          <Route path='/three' component={Three}/>
          <Route path='/four' component={Four}/>
          <Route path='/five' component={Five}/>
          <Route path='/six' component={Six}/>
          <Route path='/seven' component={Seven}/>
          <Route path='/eight' component={Eight}/>
          <Route path='/index' component={ Home }/>
          <Route path='/login' component={ Login }/>
          <Redirect to='/login'/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
  , document.getElementById( 'root' ) );


serviceWorker.unregister();
