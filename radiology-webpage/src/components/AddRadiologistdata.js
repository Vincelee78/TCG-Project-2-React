import React from 'react';
import axios from 'axios';


export default class AddRadiologist extends React.Component {
    state = {
        'radiologistId': '',
        'radiologistName': '',
        'speciality': '',
        'medicalInstitution': '',
        'email': '',
        textValid: false,
        specialityValid: false,
        submitDisabled: true,

    }

    url = "https://expressvwxl777.herokuapp.com/"


    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        }, () => {
            let textValid = (this.state.radiologistId.length >= 1
                && this.state.radiologistName.length >= 1
                && this.state.medicalInstitution.length >= 1
                && this.state.email.length >= 1 && this.state.email.includes('@')) ? true : false;
            let submitValid = this.state.specialityValid && textValid
            this.setState({
                textValid: textValid,
                submitDisabled: !submitValid
            })
        })
    }


    updateanswer = (evt) => {
        this.setState({
            speciality: evt.target.value
        }, () => {
            let specialityValid = this.state.speciality.length >= 1 ? true : false;
            let submitValid = this.state.textValid && specialityValid

            this.setState({
                specialityValid: specialityValid,
                submitDisabled: !submitValid
            })

        })
    }

    error1 = () => {
        if (this.state.radiologistId.length >= 1
            && this.state.radiologistName.length >= 1
            && this.state.medicalInstitution.length >= 1
            && this.state.email.length >= 1 ) {
            return true;
        } else {
            return 'Please check that you have input a value in all fields'
        }
    }

    error2 = () => {
        if (this.state.speciality.length >= 1) {
            return true;
        } else {
            return 'Please select a speciality'
        }
    }

    error3 = () => {
        if (this.state.email.includes('@')) {
            return true;
        } else {
            return 'Email address must contain an @ character'
        }
    }


    render() {
        return <React.Fragment>
            <div>
                <label className="form-label">Radiologist ID:</label>
                <input type="text"
                    name="radiologistId"
                    value={this.state.radiologistId}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
                <label className="form-label">Radiologist Name:</label>
                <input type="text"
                    name="radiologistName"
                    value={this.state.radiologistName}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
                <label className="form-label">Speciality:</label>
                <span className="error"> {this.error2()}</span>
                <ul>

                    <p><input name="Diagnostic radiology" type="radio" value="Diagnostic radiology" onChange={this.updateanswer} checked={this.state.speciality === 'Diagnostic radiology'} /><label>&nbsp;Diagnostic Radiology</label></p>

                    <p><input name="Interventional radiology" type="radio" value="Interventional radiology" onChange={this.updateanswer} checked={this.state.speciality === 'Interventional radiology'} /><label>&nbsp;Interventional Radiology</label></p>

                    <p><input name="Nuclear Medicine" type="radio" value="Nuclear Medicine" onChange={this.updateanswer} checked={this.state.speciality === 'Nuclear Medicine'} /><label>&nbsp;Nuclear Medicine</label></p>

                </ul>
            </div>
            <div>
                <label className="form-label">Medical Institution:</label>
                <input type="text"
                    name="medicalInstitution"
                    value={this.state.medicalInstitution}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>

            <div>
                <label className="form-label">Email:</label>
                <span className="error"> {this.error3()}</span>
                <input type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>


            <button onClick={this.AddRadiologist} className="my-3 btn btn-primary btn-sm" disabled={this.state.submitDisabled}>Add new radiologist</button>
            <span className="error"> {this.error1()}</span>
        </React.Fragment>
    }

    AddRadiologist = async () => {
        await axios.post(this.url + 'AddRadiologist', {
            radiologistId: this.state.radiologistId,
            radiologistName: this.state.radiologistName,
            speciality: this.state.speciality,
            medicalInstitution: this.state.medicalInstitution,
            email: this.state.email,

        })

        this.props.onAfterAddRadiologist()
    }

}