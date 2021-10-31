import React from 'react';
import axios from 'axios';


export default class AddReport extends React.Component {
    state = {
        'reportId': '',
        'reportTitle': '',
        'reportContent': '',
        'reportReferences': '',
        'reportTags': [],
        // default values if text fields are not filled up
        textValid: false,
        // default value if tags checkbox is not checked
        tagsValid: false,
        // add button is disabled at default
        submitDisabled: true,

    }

    // base url
    url = "https://expressvwxl777.herokuapp.com/"

    // Set all the text fields to user input value
    // and set the text to valid if there is at least a character 
    // in all text fields
    updateFormField = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        }, () => {

            let textValid = this.state.reportId.length >= 1 && this.state.reportTitle.length >= 1
                && this.state.reportContent.length >= 1 && this.state.reportReferences.length >= 1 ? true : false;

            let submitValid = this.state.tagsValid && textValid
            this.setState({
                textValid: textValid,
                submitDisabled: !submitValid
            })

        })
    }

    // Set the tags to user input value(checkboxes)
    // And set the tags field valid if there is at
    // least one checkbox being checked
    // If the text, modality and bodysystems fields are valid,
    // the add button will be enabled
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
            }, () => {
                let tagsValid=this.state.reportTags.includes(this.getDate()) && this.state.reportTags.includes('Refer to peer reviewed articles above for integrity of report')? true : false;
                let submitValid = this.state.textValid && tagsValid
                this.setState({
                    tagsValid: tagsValid,
                    submitDisabled: !submitValid
                })

            })
        }
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
        if (this.state.reportId.length >= 1 && this.state.reportTitle.length >= 1
            && this.state.reportContent.length >= 1 && this.state.reportReferences.length >= 1
        ) {
            return true;
        } else {
            return 'Please check that you have input a value in all fields'
        }
    }

    // Set the error message if there both tags checkboxes are not checked
    error2 = () => {
        if (this.state.reportTags.includes(this.getDate()) && this.state.reportTags.includes('Refer to peer reviewed articles above for integrity of report')) {
            return true;
        } else {
            return 'Please ensure both checkboxes are checked'
        }
    }

    // display add report form
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
                <span className="error"> {this.error2()}</span>
                <div className="form-label checkbox">
                    <p><input type="checkbox" name="reportTags" value={this.getDate()} onChange={this.updateitems} checked={this.state.reportTags.includes(this.getDate())} /><label>&nbsp;Published Date(Current Date)</label></p>

                    <p><input type="checkbox" name="reportTags" value="Refer to peer reviewed articles above for integrity of report" onChange={this.updateitems} checked={this.state.reportTags.includes('Refer to peer reviewed articles above for integrity of report')} /><label>&nbsp;I have included References</label></p>

                </div>
            </div>

            <button onClick={this.addReport} className="my-3 btn btn-primary btn-sm" disabled={this.state.submitDisabled}>Create Report</button>
            <span className="error"> {this.error1()}</span>
        </React.Fragment>
    }

    // post the data to the server API after filling up the form fields for add report
    addReport = async () => {
        await axios.post(this.url + 'createReport', {
            reportId: this.state.reportId,
            reportTitle: this.state.reportTitle,
            reportContent: this.state.reportContent,
            reportReferences: this.state.reportReferences,
            reportTags: this.state.reportTags,

        })

        this.props.onAfterAddReport()
    }

}























