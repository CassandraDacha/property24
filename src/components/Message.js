import React, { Component } from 'react';
class  Message extends Component {
    constructor(props) {
        super(props);
        this.changeView = this.changeView.bind(this);
    }
    changeView() {
        this.props.changeView('chat')
    }
    render() {
        return (
            <div>
                <button className="chat-button" onClick={this.changeView}>Send us a message</button>
            </div>
        )
    }
}
export default Message;