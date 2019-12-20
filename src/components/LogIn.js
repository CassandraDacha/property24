import React, { Component } from 'react'

class LogIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/');
    console.log(this.state);
  }
  handleSignup = (e) => {
    e.preventDefault();
    this.props.history.push('/signup');
    console.log(this.state);
  }
  render() {
  return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h1 class = "property">property<span>24</span></h1>
          <h3 class = "a">Welcome Back,</h3>
          <p class = "b">Sign in to continue</p>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email'onChange={this.handleChange}/>
          </div>
          <div className="container-fluid input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password'onChange={this.handleChange}/>
          </div>
          <div id = "b2"className="input-field">
          <p>Forgot Password?</p>
            <button class = "b1">Login</button>
            <p>New User? <span class ="Sign"onClick={this.handleSignup}>Signup</span></p>
          </div>
        </form>
      </div>
  )
  }
}

export default LogIn;