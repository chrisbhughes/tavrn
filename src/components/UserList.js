import React, { Component } from 'react';


export default class UserLists extends Component {

 

  render() {
    const { username } = this.props;
  
    return (
      <div className="chatapp__userpanel--container">
        <div className="userpanel__channels--container">
          <div className="userpanel__channels--add">
            <p>Channels</p>
          </div>
          <div className="userpanel__channels--list">
            {
              (usersName)
                ? <ul> 
                    {usersName.map((user, index) => {
      
                    })}
                  </ul>
                : null
            }
          </div>
        </div>
        <div className="userpanel__channels--container">
          <div className="userpanel__channels--add">
            <p>Private Messages</p>
            <AddDMBtn 
            {...this.props}
            />
          </div>
          <div className="userpanel__channels--list">
            {
                (usersDirectMessages)
                  ? <ul>
                      {usersDirectMessages.map((conversation, index) => {
                        return(
                          <li onClick={() => { choosePrivateMessageRecipient(conversation) }} key={`convoId-${index}`}>
                              <p>
                                {conversation.username}
                              </p>
                              <div onClick={(e) =>{e.stopPropagation()}}>
                                <button onClick={() => {leaveConversation(conversation._id, conversation.username)}}>&#xf014;</button>
                              </div>
                          </li>
                        )
                      })}
                    </ul>
                  : <p>No Active Conversations</p>
              }
          </div>
        </div>
      </div>
    )
  }
}