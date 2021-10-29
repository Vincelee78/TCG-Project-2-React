import React from 'react';


export default class SuccessAddRadiologist extends React.Component{

    state = {
        active: 'successAddRadiologist',
    }

    render() {
        return <React.Fragment>
            <div style={{textAlign:'center'}}>
            <h1>New Radiologist added to Radiologist Information successfully!</h1>
            <img src='https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/success-green-check-mark.png'alt=''/>
        </div>
        </React.Fragment>

    }
}