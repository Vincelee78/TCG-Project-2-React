import React from 'react';
import axios from 'axios';


export default class AddReport extends React.Component {
    state = {
        'reportId': '',
        'reportTitle': '',
        'reportContent': '',
        'reportReferences': '',
        'reportTags': '',

    }

    url = "https://5000-maroon-anglerfish-ugo6rg5n.ws-us18.gitpod.io/"


    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    updateitems = (evt) => {
        if (this.state.reportTags.includes(evt.target.value)) {
            let clone = this.state.reportTags.slice();
            let index = this.state.reportTags.indexOf(evt.target.value)
            clone.splice(index, 1);

            this.setState({
                reportTags: clone
            })

        } else {

            let clone = this.state.reportTags.slice();


            clone.push(evt.target.value);


            this.setState({
                reportTags: clone
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
                    {/* <p><input type="checkbox" name="reportTags" value="1" onChange={this.updateitems} checked={this.state.reportTags.includes('1')} /><label>&nbsp;Tag 1</label></p> */}

                    {/* <p><input type="checkbox" name="reportTags" value="2" onChange={this.updateitems} checked={this.state.reportTags.includes('2')} /><label>&nbsp;Tag 2</label></p> */}

                </div>
            </div>


            <button onClick={this.addReport} className="my-3 btn btn-primary btn-sm">Create Report</button>
        </React.Fragment>
    }

    addReport = async () => {
        await axios.post(this.url + 'report', {
            signsSymptomsTitle: this.state.signsSymptomsTitle,
            bodySystems: this.state.bodySystems,
            patientID: this.state.patientID,
            gender: this.state.gender,
        })

        this.props.onAfterAddReport()
    }

}























