import React from 'react'
import axios from 'axios'

export default class AddNew extends React.Component {
    state = {
        'signsSymptomsTitle':'',
        'patientID':'',
        'studentsTagged':''
    }

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    url = "https://5000-rose-hoverfly-vn9gcaxf.ws-us18.gitpod.io/"

    render() {
        return <React.Fragment>
            <div>
                <label className="form-label">Case presentation:</label>
                <input type="text"
                    name="signsSymptomsTitle"
                    value={this.state.signsSymptomsTitle}
                    onChange={this.updateFormField}
                    className="form-control"/>
            </div>
            <div>
                <label className="form-label">Patient ID</label>
                <input type="text"
                       name="patientID"
                       value={this.state.patientID}
                       onChange={this.updateFormField}
                       className="form-control"/>
            </div>
            <div>
            <label className="form-label">Title</label>
                <input type="text"
                    name="signsSymptomsTitle"
                    value={this.state.signsSymptomsTitle}
                    onChange={this.updateFormField}
                    className="form-control"/>
            </div>
            <div>
                <label className="form-label">Case Presentation</label>
                <input type="text"
                       name="studentsTagged"
                       value={this.state.studentsTagged}
                       onChange={this.updateFormField}
                       className="form-control"/>
            </div>

            <button onClick={this.addPatient} className="my-3 btn btn-primary btn-sm">Add</button>
        </React.Fragment>
    }

    addPatient = async () => {
        let patientsData = await axios.post(this.url + 'patientsData', {
            signsSymptomsTitle: this.state.signsSymptomsTitle,
            studentsTagged: this.state.studentsTagged.split(',')
        })
        // in a class-based component, to access the
        // props, we use `this.props`
        this.props.onAfterAddPatient()
    }
}