import React from 'react';
import axios from 'axios';


export default class AddReport extends React.Component {
    state = {
        'reportId': '',
        'reportTitle': '',
        'reportContent': '',
        'reportReferences': '',
        'reportTags': [],

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
            console.log(clone)

        } else {

            let clone = this.state.reportTags.slice();


            clone.push(evt.target.value);


            this.setState({
                reportTags: clone
            })
        }
    }

    getDate() {
        let date = new Date()
        date = String(date)
        date = date.slice(4, 15)
        return date
    }

    render() {
        return <React.Fragment>
            <div>
                <label className="form-label">Report ID:</label>
                <input type="text"
                    name="reportId"
                    value={this.state.reportId}
                    onChange={this.updateFormField}
                    className="form-control" />
            </div>
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
                    <p><input type="checkbox" name="reportTags" value={this.getDate()} onChange={this.updateitems} checked={this.state.reportTags.includes(this.getDate())} /><label>&nbsp;Published Date(Current Date)</label></p>

                    <p><input type="checkbox" name="reportTags" value="Refer to peer reviewed articles above for integrity of report" onChange={this.updateitems} checked={this.state.reportTags.includes('Refer to scientific references above for integrity of report')} /><label>&nbsp;I have included References</label></p>

                </div>
            </div>


            <button onClick={this.addReport} className="my-3 btn btn-primary btn-sm">Create Report</button>
        </React.Fragment>
    }

    addReport = async () => {
        await axios.post(this.url + 'createReport', {
            reportId: this.state.reportId,
            reportTitle: this.state.reportTitle,
            reportContent: this.state.reportContent,
            reportReferences: this.state.reportReferences,
            reportTags:this.state.reportTags,

        })

        this.props.onAfterAddReport()
    }

}























