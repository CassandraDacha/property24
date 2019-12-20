import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    password1: '',
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
    this.props.history.push('/login');
    console.log(this.state);
  }
  render() {
  return (
    <div id = "b4" className="container">
      <form className="white" onSubmit={this.handleSubmit}>
      <h1 class = "property">property<span>24</span></h1>
          <h3 class = "a">Welcome Back,</h3>
          <p class = "b">Sign in to continue</p>
        <div className="input-field">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id='fullName'onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id='email'onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id='password'onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Confirm password</label>
          <input type="password" id='password1'onChange={this.handleChange}/>
        </div>
        <div className="input-field">
          <button class = "b1">Sign Up</button>
          <p>Already Have an Account? <span class ="Sign"onClick={this.handleSignup}>Login</span></p>
        </div>
      </form>
    </div>
  )
}
}

export default SignUp