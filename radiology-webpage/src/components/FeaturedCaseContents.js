import React from "react";
import axios from "axios";
import AddNew from "./AddNew";
import AllCasesContent from "./AllCasesContent";


export default class FeaturedCaseContents extends React.Component{
    url = "https://5000-rose-hoverfly-vn9gcaxf.ws-us18.gitpod.io/"

    state = {
        active: 'featuredCaseContents',
        
        data: [

        ],

    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        let response = await axios.get(this.url + "featuredCase")
        if (response.status == 200) {
            this.setState({
                data: response.data
            })
        } else if (response.status != 200) {
            this.setState({
                data: ["error"]
            })

        }
    }

    renderContent() {
         if (this.state.active == 'addnew') {
            return <AddNew onAfterAddPatient={this.afterAddNewPatient} />
        }  if (this.state.active == 'editCase') {
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


    render() {
        return <React.Fragment>
            <h2 style={{ color: 'brown', marginTop: '10px' }}>Featured Case: COVID-19 positive patient</h2>
                {this.state.data.map(patientsData => <div className="container" key={patientsData._id}>
                    <div className="card">
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
                                <img id='caseImgUrl' src={patientsData.images} />
                                <div id='contents'>
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
                )}


        </React.Fragment>
}
}