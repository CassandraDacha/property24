import React, {Component} from 'react';

class  Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            content: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({username: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username);
        document.getElementById("Done").innerHTML = "Response Received"
        document.getElementById("Complete").innerHTML = "Response Received"

    }
    render() {
        return(
            <div className="form-container">
                <h1 id = "Complete">Let's Talk</h1>
                <form onSubmit={this.handleSubmit} className="form">
                    <label htmlFor="email">What is your email?</label>
                    <input type="email" name="username" onChange={this.handleChange} className="input" />
                    <label htmlFor="text">Write to us</label>
                    <input type="text" name="content" onChange={this.handleChange} className="input" />
                    <button id = "Done" className="submit">Send Message</button>
                </form>
            </div>
        )
    }
}
export default Chat;