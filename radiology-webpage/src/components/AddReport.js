import React from 'react';
import axios from 'axios';


export default class AddReport extends React.Component {
    state = {
        'reportId':'',
        'reportTitle': '',
        'reportContent': '',
        'reportReferences': '',
        'reportTags': '',

    }

    url = "https://5000-maroon-anglerfish-ugo6rg5n.ws-us17.gitpod.io/"
    
    
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


render() {
        return <React.Fragment>
            <div>
                <label className="form-label">Title:</label>
                <input type="text"
                    name="reportTitle"
                    value={this.state.reportTitle}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
                <label className="form-label">Content:</label>
                <textarea rows="10" cols="20"
                    name="reportContent"
                    value={this.state.reportContent}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
                <label className="form-label">References:</label>
                <input type="text"
                    name="reportReferences"
                    value={this.state.reportReferences}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
            <div>
            <label className="form-label">Tags:</label>
            <div className="form-label checkbox">                
            <input type="checkbox" name="reportTags"
                    value={this.state.reportTags}
                    onChange={this.updateitems}
                    />
            </div>
            </div>


            <button onClick={this.addReport} className="my-3 btn btn-success btn-sm">Create Report</button>
        </React.Fragment>
    }

    addReport = async () => {
        await axios.post(this.url + 'report', {
           signsSymptomsTitle: this.state.signsSymptomsTitle,
           bodySystems: this.state.bodySystems,
           patientID:this.state.patientID,
           gender:this.state.gender,
       })
       
       this.props.onAfterAddReport()
   }

}























