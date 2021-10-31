import React from 'react';


export default class SuccessAddReport extends React.Component{

    state = {
        active: 'successAddReport',
    }

    // display message and image when new report added successfully
    render() {
        return <React.Fragment>
            <div style={{textAlign:'center'}}>
            <h1>New Report added to All Reports successfully!</h1>
            <img src='https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/success-green-check-mark.png'alt=''/>
        </div>
        </React.Fragment>

    }
}