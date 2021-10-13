import React from "react";
import axios from "axios";



export default class FeaturedCaseContents extends React.Component {
    url = "https://5000-rose-hoverfly-vn9gcaxf.ws-us18.gitpod.io/"

    state = {

        data: [

        ],
        caseBeingEdited: 0,
        modifiedpatientId: '',
        modifiedGender: '',
        modifieddob: '',
        modifiedclinicalHistory: '',
        modifiedmodality: '',
        modifiedcaseDiscussion: '',
        modifiedbodySystem: [],
        modifiedscienticReferences: '',
        modifiedpublishedDate: '',
        modifiedsignSymptomsTitle: '',
        modifiedimages: '',


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
            this.setState({
                active: 'errorMessage'
            })

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
            modifiedGender: patientsData.gender,
            modifieddob: patientsData.dob,
            modifiedclinicalHistory: patientsData.clinicalHistory,
            modifiedmodality: patientsData.modality,
            modifiedpublishedDate: patientsData.publishedDate,
            modifiedcaseDiscussion: patientsData.caseDiscussion,
            modifiedbodySystem: patientsData.bodySystems,
            modifiedscienticReferences: patientsData.scientificReferences,
            modifiedimages: patientsData.images,
            modifiedsignSymptomsTitle: patientsData.signsSymptomsTitle,
        });
    };

    updateCase = () => {
        // clone the original task
        // let currentUser = this.state.users.filter((a) => a._id === user._id)[0];
        // modifiedUser is the cloned original array
        let modifiedCase = this.state.data.slice();
        // let modifiedUser = { ...user1 };

        // make changes to the clone
        // modified task we have changed
        // modifiedUser._id is the orginal clone id
        // modifiedUser.name is the orginal clone name
        // this.state.modifiedUsername refer to begin edit(user) function, user.name
        modifiedCase._id = this.state.caseBeingEdited;
        modifiedCase.patientID= this.state.modifiedpatientId
        modifiedCase.signsSymptomsTitle = this.state.modifiedsignSymptomsTitle;
        modifiedCase.gender=this.state.modifiedGender
        modifiedCase.dob=this.state.modifieddob
        modifiedCase.clinicalHistory=this.state.modifiedclinicalHistory
        modifiedCase.modality=this.state.modifiedmodality
        modifiedCase.caseDiscussion=this.state.modifiedcaseDiscussion
        modifiedCase.bodySystems=this.state.modifiedbodySystem
        modifiedCase.scientificReferences=this.state.modifiedscienticReferences
        modifiedCase.publishedDate=this.state.modifiedpublishedDate
        modifiedCase.images=this.state.modifiedimages



        let indexToModify = this.state.data.findIndex(
            (u) => u._id === modifiedCase._id
        );
        // clone the task array and insert the cloned task into the cloned array

        let cloned = [
            ...this.state.data.slice(0, indexToModify),
            modifiedCase,
            ...this.state.data.slice(indexToModify + 1)
        ];

        console.log(indexToModify);
        console.log(cloned);

        // update the array with setState
        this.setState({
            data: cloned,
            caseBeingEdited:0
        });
    }

    renderEditDisplay = (a) => {
        return (

            <React.Fragment>
                <h3>Editing PatientID: {this.state.modifiedpatientId}</h3>
                <div className="innerbox">
                    <h6>Case Presentation:</h6>
                    <textarea rows="4" cols="40" value={this.state.modifiedsignSymptomsTitle} name="modifiedsignSymptomsTitle"
                        onChange={(evt) => {

                            this.setState({
                                modifiedsignSymptomsTitle: evt.target.value
                            });
                        }} > </textarea><br />

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
                    <textarea rows="4" cols="40"
                        type="text"
                        value={this.state.modifiedclinicalHistory}
                        onChange={(evt) => {
                            this.setState({
                                modifiedclinicalHistory: evt.target.value
                            });
                        }}
                        name="modifiedclinicalHistory"
                    ></textarea>

                    <h6>Images:</h6>
                    <textarea rows="4" cols="40"
                        type="text"
                        value={this.state.modifiedimages}
                        onChange={(evt) => {
                            this.setState({
                                modifiedimages: evt.target.value
                            });
                        }}
                        name="modifiedimages"
                    ></textarea>

                    <h6>Modality:</h6>
                    <input
                        type="text"
                        value={this.state.modifiedmodality}
                        onChange={(evt) => {
                            this.setState({
                                modifiedmodality: evt.target.value
                            });
                        }}
                        name="modifiedmodality"
                    />

                    <h6>Published Date:</h6>
                    <input
                        type="text"
                        value={this.state.modifiedpublishedDate}
                        onChange={(evt) => {
                            this.setState({
                                modifiedpublishedDate: evt.target.value
                            });
                        }}
                        name="modifiedpublishedDate"
                    />

                    <h6>Case Discussion:</h6>
                    <textarea rows="6" cols="40"
                        type="text"
                        value={this.state.modifiedcaseDiscussion}
                        onChange={(evt) => {
                            this.setState({
                                modifiedcaseDiscussion: evt.target.value
                            });
                        }}
                        name="modifiedcaseDiscussion"
                    ></textarea>

                    <h6>Body Systems:</h6>
                    <input
                        type="text"
                        value={this.state.modifiedbodySystem}
                        onChange={(evt) => {
                            this.setState({
                                modifiedbodySystem: evt.target.value
                            });
                        }}
                        name="modifiedbodysystem"
                    />

                    <h6>Scientific References:</h6>
                    <textarea rows="6" cols="40"
                        type="text"
                        value={this.state.modifiedscienticReferences}
                        onChange={(evt) => {
                            this.setState({
                                modifiedscienticReferences: evt.target.value
                            });
                        }}
                        name="modifiedscientificReferences"
                    ></textarea> <br />


                    <button onClick={() => {
                        this.updateCase(a);
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
                            {/* <div>{this.renderContent()}</div> */}
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
