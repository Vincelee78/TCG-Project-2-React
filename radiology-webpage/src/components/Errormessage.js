import React from "react";

export default class ErrorMessage extends React.Component{
    state = {
        active: 'errorMessage',
    }

    render() {
        
        return <React.Fragment>
            <div class='error' style={{textAlign:'center'}}>
            <h1>Error: Server is down. Please contact admin</h1>
            <img className='errorMessageImg' src='https://i.imgur.com/mrVreye.gif' alt=''/>
        </div>
        </React.Fragment>

    }
}