import React from "react";

export default class SuccessAddMessage extends React.Component {
    state = {
        active: "successAddMessage",
    };
    // display message and image when case added successfully
    render() {
        return (
            <React.Fragment>
                <div style={{ textAlign: "center" }}>
                    <h1>New Case added to All Cases successfully!</h1>
                    <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/success-green-check-mark.png"
                        alt=""
                    />
                </div>
            </React.Fragment>
        );
    }
}
