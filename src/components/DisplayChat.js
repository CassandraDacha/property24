import React, { Component } from 'react';
import Message from './Message'
import Chat from './Chat'
import { default as Chatkit } from '@pusher/chatkit-server';

const chatkit = new Chatkit({
  instanceLocator: "v1:us1:4f4ea47e-53c7-4ba9-b6dc-96395b086731",
  key: "c4ba346c-4d51-4d52-9399-4ea78f5b6f88:W8tZF3bEkxUh9Ko2gSOOrwMwqE8aLeu48lAV4bW5pz8="
})
class DisplayChat extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: '',
      currentId: '',
      currentView: 'Message'
    }
    this.changeView = this.changeView.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  createUser(username) {
    chatkit.createUser({
        id: username,
        name: username,
    })
    .then((currentUser) => {
        this.setState({
            currentUsername: username,
            currentId: username,
            currentView: 'Message'
        })
    }).catch((err) => {
             if(err.status === 400) {
            this.setState({
                currentUsername: username,
                currentId: username,
                currentView: 'Message'
            })
        } else {
            console.log(err.status);
        }
    });
}

changeView(view) {
    this.setState({
        currentView: view
    })
}

  render(){
    let view ='';

            if (this.state.currentView === "Message") {
                view = <Message  changeView={this.changeView}/>
            } else if (this.state.currentView === "chat") {
                view = <Chat onSubmit={this.createUser}/>
            } else if (this.state.currentView === "Message") {
                view = <h1>The chatapp will go here</h1>
            }
            return (
                <div className="Chat">
                    {view}
                </div>
            );
        }
    }
    export default DisplayChat;