import React from 'react';
import axios from 'axios';


export default class AddNew extends React.Component {
    state = {
        'signsSymptomsTitle': '',
        'patientID': '',
        'gender': '',
        'dob': '',
        'clinicalHistory': '',
        'images': '',
        'modality': '',
        'publishedDate': '',
        'caseDiscussion': '',
        'radiologistId': '',
        'bodySystems': [],
        'scientificReferences': '',
        // default values if text fields are not filled up
        textValid:false,
        // default value if modality radio field is not checked 
        modalityValid:false,
        // default value if body systems checkbox is not checked
        bodySystemsValid:false,
        // add button is disabled at default
        submitDisabled: true,


    }
    // Set the modality to user input value
    // and set the modality to valid if one radio button is checked
    updateanswer = (evt) => {

        this.setState({
            modality: evt.target.value,
        }, () => {
        
        let modalityValid = this.state.modality.length>=1 ? true : false;
        let submitValid = this.state.bodySystemsValid && this.state.textValid 
        && modalityValid 

        this.setState({
            modalityValid:modalityValid,
            submitDisabled: !submitValid
        })
    })
    }

    // Set all the text fields to user input value
    // and set the text to valid if there is at least a character 
    // in all text fields
    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        }, () => {

        let textValid = (this.state.signsSymptomsTitle.length >= 1 && this.state.patientID.length >= 1
        && this.state.gender.length >= 1 && this.state.dob.length >= 1
        && this.state.clinicalHistory.length >= 1 && this.state.images.length >= 1
        && this.state.scientificReferences.length >= 1 && this.state.caseDiscussion.length >= 1
        && this.state.radiologistId.length >= 1) ? true : false; 
        let submitValid = this.state.bodySystemsValid && this.state.modalityValid 
        && textValid 
        this.setState({
            textValid: textValid,
            submitDisabled: !submitValid
        })
    })
    }


    // Set the bodySystems to user input value(checkboxes)
    // And set the bodysystems field valid if there is at
    // least one checkbox being checked
    // If the text, modality and bodysystems fields are valid,
    // the add button will be enabled
    updateitems = (evt) => {
        let clone;
        if (this.state.bodySystems.includes(evt.target.value)) {
             clone = this.state.bodySystems.slice();
            let index = this.state.bodySystems.indexOf(evt.target.value)
            clone.splice(index, 1);  

        } else {
             clone = this.state.bodySystems.slice();
            clone.push(evt.target.value);       
        } 

        this.setState({
            bodySystems: clone

        },() => {

        let bodySystemsValid=this.state.bodySystems.length>=1 ? true : false;
        let submitValid = this.state.textValid && this.state.modalityValid 
        && bodySystemsValid
        this.setState({
            bodySystemsValid: bodySystemsValid, 
            submitDisabled: !submitValid
          }) 
        })
    }

    // change the current date to month DD YYYY format
    getDate() {
        let date = new Date()
        date = String(date)
        date = date.slice(4, 15)
        return date
    }

    // Set the error message if all the text fields are not filled up with
    // at least 1 character
    error1 = () => {
        if (this.state.signsSymptomsTitle.length >= 1 && this.state.patientID.length >= 1
            && this.state.gender.length >= 1 && this.state.dob.length >= 1
            && this.state.clinicalHistory.length >= 1 && this.state.images.length >= 1
            && this.state.scientificReferences.length >= 1 && this.state.caseDiscussion.length >= 1
            && this.state.radiologistId.length >= 1) {
            return true;
        } else {
            return 'Please check that you have input a value in all fields'
        }
    }

    // Set the error message if the modality radio button is not checked
    error2 = () => {
        if (this.state.modality.length >= 1) {
            return true;
        } else {
            return 'Please select a modality'
        }
    }

    // Set the error message if there is no bodysystems checkboxes being checked
    error3 = () => {
        if (this.state.bodySystems.length >= 1) {
            return true;
        } else {
            return 'Please check body systems involved'
        }
    }

    // base url
    url = "https://expressvwxl777.herokuapp.com/"

    // display add case form
    render() {
        return <React.Fragment>
            <div>
                
                <label className="form-label">Case presentation:</label>
                <input type="text"
                    name="signsSymptomsTitle"
                    value={this.state.signsSymptomsTitle}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
                
                <label className="form-label">Patient ID:</label>
                <input type="text"
                    name="patientID"
                    value={this.state.patientID}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
                
                <label className="form-label">Patient's gender:</label>
                <input type="text"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
                
                <label className="form-label">Patient's date of birth (please enter in YYYY-MM-DD format):</label>
                <input type="text"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
                
                <label className="form-label">Clinical History:</label>
                <input type="text"
                    name="clinicalHistory"
                    value={this.state.clinicalHistory}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
                
                <label className="form-label">Please place patient's diagnostic images using photobucket URL here:</label>
                <input type="text"
                    name="images"
                    value={this.state.images}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
                <label className="form-label">Imaging modality:</label>
                {/* set the error message for modality radio button */}
                <span className="error"> {this.error2()}</span>
                <ul>

                    <p><input name="X-ray" type="radio" value="X-ray" onChange={this.updateanswer} checked={this.state.modality === 'X-ray'} /><label>&nbsp;X-ray</label></p>

                    <p><input name="Computed Tomography" type="radio" value="Computed Tomography" onChange={this.updateanswer} checked={this.state.modality === 'Computed Tomography'} /><label>&nbsp;Computed Tomography</label></p>

                    <p><input name="Ultrasound" type="radio" value="Ultrasound" onChange={this.updateanswer} checked={this.state.modality === 'Ultrasound'} /><label>&nbsp;Ultrasound</label></p>

                    <p><input name="MRI" type="radio" value="MRI" onChange={this.updateanswer} checked={this.state.modality === 'MRI'} /><label>&nbsp;MRI</label></p>

                </ul>

            </div>

            <div>
                <label className="form-label">Published Date:</label>
                <input type="text"
                    name="publishedDate"
                    // the published date will be set to current date when adding a new case
                    value={this.getDate()}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>

            <div>
                <label className="form-label">Case Discussion:</label>
                <textarea rows="10" cols="30"
                    name="caseDiscussion"
                    value={this.state.caseDiscussion}
                    onChange={this.updateFormField}
                    className="form-control"></textarea>
            </div>

            <div>
                <label className="form-label">Please enter your Radiologist ID:</label>
                <input type="text"
                    name="radiologistId"
                    value={this.state.radiologistId}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
                <label className="form-label">Body Systems Involved:</label>
                {/* set the error message for checkboxes */}
                <span className="error"> {this.error3()}</span>
                <div className="form-label checkbox">
                    <p><input type="checkbox" name="bodySystems" value="Cardiovascular" onChange={this.updateitems} checked={this.state.bodySystems.includes('Cardiovascular')} /><label>&nbsp;Cardiovascular</label></p>

                    <p><input type="checkbox" name="bodySystems" value="Gastrointestinal" onChange={this.updateitems} checked={this.state.bodySystems.includes('Gastrointestinal')} /><label>&nbsp;Gastrointestinal</label></p>

                    <p><input type="checkbox" name="bodySystems" value="Endocrine" onChange={this.updateitems} checked={this.state.bodySystems.includes('Endocrine')} /><label>&nbsp;Endocrine</label></p>

                    <p><input type="checkbox" name="bodySystems" value="Exocrine" onChange={this.updateitems} checked={this.state.bodySystems.includes('Exocrine')} /><label>&nbsp;Exocrine</label></p>

                    <p><input type="checkbox" name="bodySystems" value="Lymphatic" onChange={this.updateitems} checked={this.state.bodySystems.includes('Lymphatic')} /><label>&nbsp;Lymphatic</label></p>

                    <p><input type="checkbox" name="bodySystems" value="Muscular" onChange={this.updateitems} checked={this.state.bodySystems.includes('Muscular')} /><label>&nbsp;Muscular</label></p>

                    <p><input type="checkbox" name="bodySystems" value="Nervous" onChange={this.updateitems} checked={this.state.bodySystems.includes('Nervous')} /><label>&nbsp;Nervous</label></p>

                    <p><input type="checkbox" name="bodySystems" value="Renal" onChange={this.updateitems} checked={this.state.bodySystems.includes('Renal')} /><label>&nbsp;Renal</label></p>

                    <p><input type="checkbox" name="bodySystems" value="Reproductive" onChange={this.updateitems} checked={this.state.bodySystems.includes('Reproductive')} /><label>&nbsp;Reproductive</label></p>

                    <p><input type="checkbox" name="bodySystems" value="Respiratory" onChange={this.updateitems} checked={this.state.bodySystems.includes('Respiratory')} /><label>&nbsp;Respiratory</label></p>

                    <p><input type="checkbox" name="bodySystems" value="Skeletal" onChange={this.updateitems} checked={this.state.bodySystems.includes('Skeletal')} /><label>&nbsp;Skeletal</label></p>

                </div>

            </div>

            <div>
                <label className="form-label">Scientific References:</label>
                <input type="text"
                    name="scientificReferences"
                    value={this.state.scientificReferences}
                    onChange={this.updateFormField}
                    className="form-control" />
                    
            </div>

            <button onClick={this.addPatient} className="my-3 btn btn-primary btn-sm" disabled={this.state.submitDisabled}>Add</button>
            {/* set the error message for text input */}
            <span className="error"> {this.error1()}</span>
        </React.Fragment>
    }

    // post the data to the server API after filling up the form fields for add
    addPatient = async () => {
        await axios.post(this.url + 'createNewCase', {
            signsSymptomsTitle: this.state.signsSymptomsTitle,
            bodySystems: this.state.bodySystems,
            patientID: this.state.patientID,
            gender: this.state.gender,
            dob: this.state.dob,
            clinicalHistory: this.state.clinicalHistory,
            images: this.state.images,
            modality: this.state.modality,
            publishedDate: this.state.publishedDate,
            caseDiscussion: this.state.caseDiscussion,
            radiologistId: this.state.radiologistId,
            scientificReferences: this.state.scientificReferences
        })
        // in a class-based component, to access the
        // props, we use `this.props`
        this.props.onAfterAddPatient()
    }
}