import React from "react";
import axios from "axios";
import AddNew from "./AddNew";
import AllCasesContent from "./AllCasesContent";


export default class FeaturedCaseContents extends React.Component {
    url = "https://5000-rose-hoverfly-vn9gcaxf.ws-us18.gitpod.io/"

    state = {
        active: 'featuredCaseContents',

        data: [

        ],
        caseBeingEdited: 0,
        modifiedpatientId: '',
        modifiedcasePresentation: '',
        modifiedGender: '',
        modifieddob: '',
        modifiedclinicalHistory: '',
        modifiedmodality: '',
        modifiedcaseDiscussion: '',
        modifiedradiologistId: '',
        modifiedbodySystem: [],
        modifiedscienticReferences: '',
        modifiedpublishedDate:'',
        modifiedsignSymptomsTitle:'',
        modifiedimages:'',


    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            let response = await axios.get(this.url + "featuredCase")
            this.setState({
                data: response.data
            })

        } catch (e) {
            let renderError = e

        }

    }


    renderError() {
        return (<React.Fragment>
            <h1>Error: We have encountered an internal server error</h1>
        </React.Fragment>)
    }



    renderContent() {
        if (this.state.active === 'addnew') {
            return <AddNew onAfterAddPatient={this.afterAddNewPatient} />
        } if (this.state.active === 'editCase') {
            return <AllCasesContent />
        }
    }

    setActive(nextPage) {
        this.setState({
            'active': nextPage
        })
    }

    afterAddNewPatient = () => {
        this.setActive('home')
    }

    beginEdit = (patientsData) => {
        this.setState({
            userBeingEdited: patientsData._id,
            modifiedpatientId: patientsData.patientID,
            modifiedcasePresentation: patientsData.signsSymptomsTitle,
            modifiedGender: patientsData.gender,
            modifieddob:patientsData.dob,
            modifiedclinicalHistory:patientsData.clinicalHistory,
            modifiedmodality: patientsData.modality,
            modifiedpublishedDate:patientsData.publishedDate,
            modifiedcaseDiscussion:patientsData.modifiedcaseDiscussion,
            modifiedbodySystem:patientsData.bodySystems,
            modifiedscienticReferences:patientsData.scientificReferences,
            modifiedimages: patientsData.images
        });
    };

    renderEditDisplay = (a) => {
        return (
            
            <React.Fragment>    
            <h3>Editing PatientID: {this.state.modifiedpatientId}</h3>
            <div className="box">
                <h6>Case Presentation:</h6>
              <input type="text" value={this.state.modifiedsignSymptomsTitle} name="modifiedsignSymptomsTitle"
              onChange={(evt) => {
                  
                this.setState({
                    modifiedsignSymptomsTitle: evt.target.value });
                }} /> <br/>

                <h6>Gender:</h6>
              <input
                type="text"
                value={this.state.modifiedGender}
                onChange={(evt) => {
                  this.setState({
                    modifiedGender: evt.target.value
                  });
                }}
                name="modifiedGender"
              />

               <h6>Date of Birth:</h6>
              <input
                type="text"
                value={this.state.modifieddob}
                onChange={(evt) => {
                  this.setState({
                    modifieddob: evt.target.value
                  });
                }}
                name="modifieddob"
              />

              <h6>Clinical History:</h6>
              <input
                type="text"
                value={this.state.modifiedclinicalHistory}
                onChange={(evt) => {
                  this.setState({
                    modifiedclinicalHistory: evt.target.value
                  });
                }}
                name="modifiedclinicalHistory"
              />

                <h6>Gender:</h6>
                 <input
                type="text"
                value={this.state.modifiedGender}
                onChange={(evt) => {
                  this.setState({
                    modifiedGender: evt.target.value
                  });
                }}
                name="modifiedGender"
              />

                <h6>Gender:</h6>
                 <input
                type="text"
                value={this.state.modifiedGender}
                onChange={(evt) => {
                  this.setState({
                    modifiedGender: evt.target.value
                  });
                }}
                name="modifiedGender"
              />

                <h6>Gender:</h6>
                 <input
                type="text"
                value={this.state.modifiedGender}
                onChange={(evt) => {
                  this.setState({
                    modifiedGender: evt.target.value
                  });
                }}
                name="modifiedGender"
              />

                 <h6>Gender:</h6>
                 <input
                type="text"
                value={this.state.modifiedGender}
                onChange={(evt) => {
                  this.setState({
                    modifiedGender: evt.target.value
                  });
                }}
                name="modifiedGender"
              />

                <h6>Gender:</h6>
                 <input
                type="text"
                value={this.state.modifiedGender}
                onChange={(evt) => {
                  this.setState({
                    modifiedGender: evt.target.value
                  });
                }}
                name="modifiedGender"
              />

                <h6>Gender:</h6>
                 <input
                type="text"
                value={this.state.modifiedGender}
                onChange={(evt) => {
                  this.setState({
                    modifiedGender: evt.target.value
                  });
                }}
                name="modifiedGender"
              />

                <h6>Gender:</h6>
                 <input
                type="text"
                value={this.state.modifiedGender}
                onChange={(evt) => {
                  this.setState({
                    modifiedGender: evt.target.value
                  });
                }}
                name="modifiedGender"
              />

              <button onClick={() => {
                  this.updateuser(a);
                }}> Confirm </button>
              
            </div>
                
            </React.Fragment>
            
        );
    };

    render() {
        return (

            this.state.data.map(patientsData => {
                if (patientsData._id === this.state.userBeingEdited) {
                    return (
                        <React.Fragment key={patientsData._id}>
                            <div className="box">{this.renderEditDisplay()}</div>
                        </React.Fragment>
                    )
                } else {
                    return (
                        <React.Fragment key={patientsData._id}>
                            <h2 style={{ color: 'brown', marginTop: '10px' }}>Featured Case: COVID-19 positive patient</h2>
                            <div className="container" key={patientsData._id}>
                                <div className="card">
                                    <button onClick={() => {
                                        this.beginEdit(patientsData);
                                    }}> Edit Case
                                    </button>
                                    <div className="card-body" >
                                        <h3 className="card-title">
                                            <h5>Case presentation:</h5>
                                            <p><h6>{patientsData.signsSymptomsTitle}</h6></p>
                                        </h3>
                                        <p><h5>Patient ID: {patientsData.patientID}</h5></p>
                                        <p><h5>Gender: {patientsData.gender}</h5></p>
                                        <p><h5>Date of birth: {patientsData.dob}</h5></p>
                                        <h5>Clinical History: </h5>
                                        <p><h6>{patientsData.clinicalHistory}</h6></p>
                                        <div id='flexContainer'>
                                            <img id='caseImgUrl' alt='' src={patientsData.images} />
                                            <div id='contents' style={{ paddingTop: '40px' }}>
                                                <p><h5>Imaging Modality: {patientsData.modality}</h5></p>
                                                <p><h5>Published Date: {patientsData.publishedDate}</h5></p>

                                                <h5>Case Discussion: </h5>
                                                <p><h6>{patientsData.caseDiscussion}</h6></p>

                                                <p><h5>Radiologist ID: {patientsData.radiologistId}</h5></p>
                                                <h5>Body Systems:</h5>
                                                <ul>
                                                    {patientsData.bodySystems.map(i => <li key={i}>{i}</li>)}
                                                </ul>
                                                <h5>Scientific References: </h5>
                                                <h6>{patientsData.scientificReferences}</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </React.Fragment>)
                }
            })

        )
    }

}
