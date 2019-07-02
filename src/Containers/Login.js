import React, { Component } from 'react';
import {connect} from 'react-redux'
import {loginFetch} from '../Reducers/Fetching'

class Login extends Component {

  state = {
    username: "",
    password: "",
    name:"",
    pieces:[],
    groups:[],
    bio:"",
    avatar: "http://www.vitamin-ha.com/wp-content/uploads/2015/04/Drinking-Dogs-funny-cool-dog-drinking-beer66.jpg"
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const loginInformation = this.state
    this.props.loginFetch(loginInformation)
    // console.log(loginInformation, "LOGIN INFO")
     console.log(this.state, "STATE")

    this.props.history.push("/mypage")
  }

  render() {
    const {username, password} = this.state
    return (
      <div>
        <h3>LOGIN</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={username} onChange={this.handleChange}/>
          </label>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={this.handleChange}/>
          </label>
          <input type="submit"/>
        </form>
      </div>
    );
  }

}

export default connect(null, {loginFetch})(Login);
