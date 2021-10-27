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
        'scientificReferences': ''

    }

    updateanswer = (evt) => {
        this.setState({
            modality: evt.target.value
        })
    }

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }



    updateitems = (evt) => {
        if (this.state.bodySystems.includes(evt.target.value)) {
            let clone = this.state.bodySystems.slice();
            let index = this.state.bodySystems.indexOf(evt.target.value)
            clone.splice(index, 1);

            this.setState({
                bodySystems: clone
            })

        } else {

            let clone = this.state.bodySystems.slice();


            clone.push(evt.target.value);


            this.setState({
                bodySystems: clone
            })
        }
    }

    getDate() {
        let date = new Date()
        date = String(date)
        date = date.slice(4, 15)
        return date
    }

    url = "https://5000-maroon-anglerfish-ugo6rg5n.ws-us18.gitpod.io/"

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
                <label className="form-label">Patient's date of birth:</label>
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
                <ul>

                    <p><input name="X-ray" type="radio" value="X-ray" onChange={this.updateanswer} checked={this.state.modality === 'X-ray'} /><label>&nbsp;X-ray</label></p>

                    <p><input name="ComputedTomography" type="radio" value="ComputedTomography" onChange={this.updateanswer} checked={this.state.modality === 'ComputedTomography'} /><label>&nbsp;Computed Tomography</label></p>

                    <p><input name="Ultrasound" type="radio" value="Ultrasound" onChange={this.updateanswer} checked={this.state.modality === 'Ultrasound'} /><label>&nbsp;Ultrasound</label></p>

                    <p><input name="MRI" type="radio" value="MRI" onChange={this.updateanswer} checked={this.state.modality === 'MRI'} /><label>&nbsp;MRI</label></p>

                </ul>
            </div>
            <div>
                <label className="form-label">Published Date:</label>
                <input type="text"
                    name="publishedDate"
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

            <button onClick={this.addPatient} className="my-3 btn btn-primary btn-sm">Add</button>
        </React.Fragment>
    }

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