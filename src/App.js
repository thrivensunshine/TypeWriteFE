import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {Switch, Route, Link} from 'react-router-dom'
import Login from './Containers/Login'
import UserPage from './Containers/UserPage'
import SignUp from './Containers/SignUp'
import PromptContainer from './Containers/PromptContainer'

import {fetchTokenPersit} from './Reducers/Fetching'



class App extends React.Component{

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.fetchTokenPersit(localStorage.getItem("token"))
    }
  }
render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Testboo</h1>

          <Link className="hey1" to="/">Home</Link>
          <Link className="hey2" to="/login">Login</Link>
          <Link className="hey3" to="/mypage">Mah Stuff</Link>
        <Switch>

          <Route path='/login' render={(routerProps) => <Login {...routerProps}/>}/>
          <Route path='/mypage' render={(routerProps)=> <UserPage {...routerProps}/>}/>
          <Route path='/signup' render={(routerProps)=> <SignUp {...routerProps}/>}/>
          <Route path='/promptme' render={(routerProps)=> <PromptContainer{...routerProps}/>}/>

        </Switch>
      </header>
    </div>
  );
}
}
const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {fetchTokenPersit})(App);

//this is a test
