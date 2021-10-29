import React from 'react';
import axios from 'axios';


export default class AddRadiologist extends React.Component {
    state = {
        'radiologistId': '',
        'radiologistName': '',
        'speciality': '',
        'medicalInstitution': '',
        'email': '',

    }

    url = "https://expressvwxl777.herokuapp.com/"


    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    updateanswer = (evt) => {
        this.setState({
            speciality: evt.target.value
        })
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
                <input type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>


            <button onClick={this.AddRadiologist} className="my-3 btn btn-primary btn-sm">Add new radiologist</button>
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