import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'

class SignUp extends Component {

  state = {
    username: "",
    password: "",
    photoUrl: "",
    signUp: false,

  };

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleSignUp = (e) => {
    e.preventDefault()
    this.setState({
      signup: !this.state.signup
    })
    console.log(this.state.signup, "SIIGN UP ")
  }

  loginButton = (e) => {
    e.preventDefault()

  }
  render() {
    const {username, password} = this.state

    if(this.state.signup === true){
    return (
      <div>
        <h1 className="titleHome">PROMPTLY</h1>
        <div>

          <div>
        <h1 className="roam">Let your creativity roam</h1>
        </div>

        <div className="signdiv">
          <button className="signbut" onClick={this.handleSignUp}>signup here</button>
          </div>

          <Link className="loginfromhome" to="/login">Login</Link>


        </div>


        <form className="aform" onSubmit={this.handleSubmit}>
          <label>
            Username:
            <br/>
            <input className="forminput" type="text" name="username" value={username} onChange={this.handleChange}/>
          </label>
        <br/>
          <label>
            Password:
            <br/>
            <input className="forminput"type="password" name="password" value={password} onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Photo URL
            <br/>
            <input className="forminput" type="text" name="photoUrl"  onChange={this.handleChange} />
          </label>
        <br/>
          <input type="submit"/>
        </form>
      </div>
    );}else{
      return(
        <div>
          <h1 className="titleHome">PROMPTLY</h1>


          <h1 className="roam">Let your creativity roam</h1>


          <div className="signdiv">
            <button className="signbut" onClick={this.handleSignUp}>signup here</button>
            </div>
          <Link className="loginfromhome" to="/login">Login</Link>

        </div>
      )
    }
  }

}

export default SignUp;
