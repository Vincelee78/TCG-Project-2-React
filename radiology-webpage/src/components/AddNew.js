import React from 'react'
import axios from 'axios'

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

    url = "https://5000-rose-hoverfly-vn9gcaxf.ws-us18.gitpod.io/"

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
                <input type="text"
                    name="modality"
                    value={this.state.modality}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
                <label className="form-label">Published Date:</label>
                <input type="text"
                    name="publishedDate"
                    value={this.state.publishedDate}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
                <label className="form-label">Case Discussion:</label>
                <textarea name="message" rows="10" cols="30"
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
                <input type="checkbox" name="bodySystems" value="cardio" onChange={this.updateitems} checked={this.state.bodySystems.includes('cardio')} /><label>Cardiovascular System</label>
            
                <input type="checkbox" name="bodySystems" value="gastro" onChange={this.updateitems} checked={this.state.bodySystems.includes('gastro')} /><label>Gastrointestinal</label>
            
                <input type="checkbox" name="bodySystems" value="endocrine" onChange={this.updateitems} checked={this.state.bodySystems.includes('endocrine')} /><label>Endocrine</label>
            
                <input type="checkbox" name="bodySystems" value="exocrine" onChange={this.updateitems} checked={this.state.bodySystems.includes('exocrine')} /><label>Exocrine</label>
            
                <input type="checkbox" name="bodySystems" value="lymph" onChange={this.updateitems} checked={this.state.bodySystems.includes('lymph')} /><label>Lymphatic</label>
            
                <input type="checkbox" name="bodySystems" value="muscular" onChange={this.updateitems} checked={this.state.bodySystems.includes('muscular')} /><label>Muscular</label>
            
                <input type="checkbox" name="bodySystems" value="nervous" onChange={this.updateitems} checked={this.state.bodySystems.includes('nervous')} /><label>Nervous</label>
            
                <input type="checkbox" name="bodySystems" value="renal" onChange={this.updateitems} checked={this.state.bodySystems.includes('renal')} /><label>Renal</label>
            
                <input type="checkbox" name="bodySystems" value="reproductive" onChange={this.updateitems} checked={this.state.bodySystems.includes('reproductive')} /><label>Reproductive</label>
            
                <input type="checkbox" name="bodySystems" value="respiratory" onChange={this.updateitems} checked={this.state.bodySystems.includes('respiratory')} /><label>Respiratory</label>
            
                <input type="checkbox" name="bodySystems" value="skeletal" onChange={this.updateitems} checked={this.state.bodySystems.includes('skeletal')} /><label>Skeletal</label>
                
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
        let patientsData = await axios.post(this.url + 'patientsData', {
            signsSymptomsTitle: this.state.signsSymptomsTitle,
            // bodySystems: this.state.bodySystems.split(',')
        })
        // in a class-based component, to access the
        // props, we use `this.props`
        this.props.onAfterAddPatient()
    }
}