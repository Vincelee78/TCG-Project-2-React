import React from 'react';
import axios from 'axios';



export default class Report extends React.Component {
    state = {
        'active': 'Reports',
        'data': [

        ],

    }
    url = "https://5000-maroon-anglerfish-ugo6rg5n.ws-us18.gitpod.io/"

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

    deleteReport = async (reportId)=> {
        
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
                        <h2 style={{ color: 'smoke' }}>Report: {reportData.reportId}</h2>
                        <h3 style={{ color: 'wheat' }}>{reportData.reportTitle}</h3>
                        <p>{reportData.reportContent}</p>
                        <h3 style={{ color: 'wheat' }}>References: </h3><p> {reportData.reportReferences}</p>
                        {/* <h3 style={{ color: 'wheat' }}>Tags: </h3>{reportData.reportTags.map(i => <h6><li className="reportTags">{i}</li></h6>)} */}
                        
                        <div className='buttonsReports'>
                        <button className='deleteReport btn btn-danger my-3'
                        onClick={() => {
                        this.deleteReport(reportData._id);
                            }}
                        >Delete</button><br/>
                        </div>





                    {/* <strong>3D printing</strong>, a term often used synonymously with additive manufacturing, is a process of creating objects from three-dimensional digital information. In most cases, 3D printing is, in fact, additive manufacturing, a process in which objects are built by adding material layer by layer. This process has several advantages over traditional manufacturing methods such as injection moulding or subtractive manufacturing relevant to medicine and surgery including the possibility of making uniquely customised objects for patients, rapidly prototyping objects, and often easier creation of complex and/or hollow objects.</p>
    
                        <p>3D printing has been used in anatomical models for surgical planning, surgical tools, splints, implantable medical devices, prostheses, and even pharmaceutical drugs. 3D printed objects have some distinct features even compared to three-dimensional virtual reconstructions in terms of surgical planning 4, allowing surgeons to not only see but touch models (created based on the specific patient's imaging studies), of the areas on which they plan to operate. </p>
    
                        <p>3D printing models of surgical pathology, in particular patients, generally requires making tessellated mesh files, such as an STL file, from a patient's DICOM files of CTs and/or MRIs. After performing appropriate segmentation in DICOM files, a radiologist will often work with a surgeon to understand how to best print (or simply model in 3D without printing) for a particular pathology.</p>
    
                        <p>4D printing is an emerging technology that can be conceptualized as 3D printing that produces objects that change over time or under certain conditions.</p>
    
                        <h3 style={{ color: 'darkblue' }}>Practical Points</h3>
                        <ul style={{ margin: '0', padding: '0' }}>
                            <li>segmentation of organs and/or regions of interest are usually done automatically or semi-automatically via computer algorithm</li>
                            <li>segmentation can be altered or even done entirely manually</li>
                            <li>prints can include water-soluble material which can be washed away</li>
                            <li>printing difficult geometries are often facilitated by printing some structures to be removed or washed away from the final print</li>
                            <li>knowledge of how materials are affected by sterilisation is necessary when printing surgical guides or other materials for the actual surgery</li>
                            <li>moulage models can be made by printing air around structures as the mould</li>
                        </ul> */}


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
                        <p class="lead">Reports are a collaborative effort to provide a single canonical page on all topics relevant to the practice of radiology. As such, reports are written and edited by contributing members over a period of time. A group of editors oversee accuracy, consulting with expert advisers, and constantly reviewing additions. </p>

                    </div>
                    {this.renderContent()}
                </div>

            </React.Fragment>)
    }



}

