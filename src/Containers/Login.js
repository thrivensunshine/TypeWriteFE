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
        <h1 className="titleHome">PROMPTLY</h1>
        <div>

        <h1 className="roam">Let your creativity roam</h1>
        </div>

        <form  onSubmit={this.handleSubmit}>
          <div className="anotherForm">
          <label className="username">
            Username:
            <input className="forminput" type="text" name="username" value={username} onChange={this.handleChange}/>
          </label>
          <br/>
          <label className="password">
            Password:
            <input className="forminput" type="password" name="password" value={password} onChange={this.handleChange}/>
          </label>
          </div>
          <br/>
          <input className="sheesh" type="submit"/>
        </form>
      </div>
    );
  }

}

export default connect(null, {loginFetch})(Login);
