import React from 'react';
import axios from 'axios';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Report extends React.Component {
    state = {
        'active': 'Reports',
        'data': [

        ],

    }
    url = "https://5000-maroon-anglerfish-ugo6rg5n.ws-us17.gitpod.io/"

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            let response = await axios.get(this.url + "report")
            this.setState({
                data: response.data
            })

        } catch (e) {
            this.setState({
                active: 'errorMessage'
            })

        }

    }

    renderTooltip = () => (
        <Tooltip >Favourite this report</Tooltip>
    );


    deleteReport = async (reportId) => {

        await axios.delete(this.url + "report/" + reportId)
        //    console.log(response)
        // let modifiedCase= [...this.state.data]
        // 1. find the index of the task
        let data_index = this.state.data.findIndex((c) => c._id === reportId);
        // console.log(data_index)
        // 2. make a copy of the array, but skip over the task that we want to delete
        let modifiedReport = [
            ...this.state.data.slice(0, data_index),
            ...this.state.data.slice(data_index + 1)
        ];


        this.setState({
            data: modifiedReport
        });
        //   console.log(modifiedCase)
    };

    renderContent = () => {
        return (
            this.state.data.map(reportData => {
                return (
                    <React.Fragment>
                        <div class='p-5 mb-4 bg-dark text-white rounded-3'>
                            <OverlayTrigger className='reviews' placement="top" overlay={this.renderTooltip()}>

                                <span className='rating me-2' id='ratingReport'>

                                    <input type='radio' value='5' name='rating' id='rating-5' />
                                    <label for='rating-5' title='5 stars'>
                                        <i class="fas fa-heart"></i>
                                    </label>
                                    <input type='radio' value='4' name='rating' id='rating-4' />
                                    <label for='rating-4' title='4 stars'>
                                        <i class="fas fa-heart"></i>
                                    </label>
                                    <input type='radio' value='3' name='rating' id='rating-3' />
                                    <label for='rating-3' title='3 stars'>
                                        <i class="fas fa-heart"></i>
                                    </label>
                                    <input type='radio' value='2' name='rating' id='rating-2' />
                                    <label for='rating-2' title='2 stars'>
                                        <i class="fas fa-heart"></i>
                                    </label>
                                    <input type='radio' value='1' name='rating' id='rating-1' />
                                    <label for='rating-1' title='1 stars'>
                                        <i class="fas fa-heart"></i>
                                    </label>

                                </span>
                            </OverlayTrigger>

                            <h2 style={{ color: 'smoke' }}>Report: {reportData.reportId}</h2>
                            <h3 style={{ color: 'wheat' }}>{reportData.reportTitle}</h3>
                            <p>{reportData.reportContent}</p>
                            <h3 style={{ color: 'wheat' }}>References: </h3><p> {reportData.reportReferences}</p>
                            <h3 style={{ color: 'wheat' }}>Tags (Published Date, Scientific Referencing): </h3>{reportData.reportTags.map(i => <h6><li className="reportTags">{i}</li></h6>)}

                            <div className='buttonsReports'>
                                <button className='deleteReport btn btn-danger my-3'
                                    onClick={() => {
                                        this.deleteReport(reportData._id);
                                    }}
                                >Delete</button><br />
                            </div>

                        </div>

                        <hr style={{ height: '5px', size: "10", color: 'red' }} />
                    </React.Fragment>)
            })
        )

    }

    render() {
        return (

            <React.Fragment>

                <div class="container-lg">
                    <div class="p-5 mb-4 bg-dark text-white rounded-3">
                        <h1>Introduction to Reports</h1>
                        <p class="lead">Reports are a collaborative effort to provide a single canonical page on all topics relevant to the practice of radiology. As such, reports are written by contributing members over a period of time. A group of editors oversee accuracy, consulting with expert advisers, and constantly reviewing additions. </p>

                    </div>
                    {this.renderContent()}
                </div>

            </React.Fragment>)
    }



}

