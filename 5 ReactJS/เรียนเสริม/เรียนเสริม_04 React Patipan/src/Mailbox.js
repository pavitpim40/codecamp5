import React from 'react'


function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            {unreadMessages.length > 0 && <p>You have {unreadMessages.length} unreadMessages</p>}
        </div>
    )
}




export default Mailbox 