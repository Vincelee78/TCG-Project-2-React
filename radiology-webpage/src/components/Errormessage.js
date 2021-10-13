import React from "react";

export default class ErrorMessage extends React.Component{


    render() {
        return <React.Fragment>
            <div class='error' style={{textAlign:'center'}}>
            <h1>Error: Server is down. Please contact admin</h1>
            <img src='https://i.imgur.com/mrVreye.gif' alt=''/>
        </div>
        </React.Fragment>

    }
}