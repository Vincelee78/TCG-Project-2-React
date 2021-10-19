import React from 'react';
import axios from 'axios';
import AddNew from '../components/AddNew';
import ErrorMessage from '../components/Errormessage';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


export default class AllCasesContent extends React.Component {
    state = {
        'active': 'AllCasesContent',
        'data': [

        ],
        userBeingEdited: 0,
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
        modifiedradiologistId: '',
    }

    url = "https://5000-maroon-anglerfish-ugo6rg5n.ws-us17.gitpod.io/"


    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            let response = await axios.get(this.url + "patientsData1")

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

    updateanswer = (evt) => {
        this.setState({
            modifiedmodality: evt.target.value
        })
    }

    updateitems = (evt) => {
        if (this.state.modifiedbodySystem.includes(evt.target.value)) {
            let clone = this.state.modifiedbodySystem.slice();
            let index = this.state.modifiedbodySystem.indexOf(evt.target.value)
            clone.splice(index, 1);

            this.setState({
                modifiedbodySystem: clone
            })

        } else {

            let clone = this.state.modifiedbodySystem.slice();


            clone.push(evt.target.value);


            this.setState({
                modifiedbodySystem: clone
            })
        }
    }


    // renderContent() {
    //     if (this.state.active === 'errorMessage') {
    //         return <ErrorMessage />
    //     } if (this.state.active === 'addnew') {
    //         return <AddNew onAfterAddPatient={this.afterAddNewPatient} />
    //     } if (this.state.active === 'editCase') {
    //         return <AllCasesContent />
    //     }
    // }

    afterAddNewPatient = () => {
        this.setActive('AllCasesContent')
    }


    deleteCase = async (caseId)=> {
        console.log(this.state.data)
        console.log('Id', caseId)
       await axios.delete(this.url + "patientsData1/" + caseId)
    //    console.log(response)
        // let modifiedCase= [...this.state.data]
       // 1. find the index of the task
        let data_index = this.state.data.findIndex((c) => c._id === caseId);
        console.log(data_index)
        // 2. make a copy of the array, but skip over the task that we want to delete
        let modifiedCase = [
          ...this.state.data.slice(0, data_index),
          ...this.state.data.slice(data_index + 1)
        ];
        
        
        this.setState({
            data: modifiedCase
          });
        //   console.log(modifiedCase)
      };
    
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
            modifiedradiologistId: patientsData.radiologistId,
        });
    };

    async updateCase() {
        // clone the original task
        // let currentUser = this.state.users.filter((a) => a._id === user._id)[0];
        // modifiedUser is the cloned original array
        let modifiedCase = this.state.data.slice();
        modifiedCase._id = this.state.userBeingEdited;
        await axios.put(this.url + 'patientsData1/' + modifiedCase._id, {
            

            // make changes to the clone
            patientID: this.state.modifiedpatientId,
            signsSymptomsTitle: this.state.modifiedsignSymptomsTitle,
            gender: this.state.modifiedGender,
            dob: this.state.modifieddob,
            clinicalHistory: this.state.modifiedclinicalHistory,
            modality: this.state.modifiedmodality,
            caseDiscussion: this.state.modifiedcaseDiscussion,
            bodySystems: this.state.modifiedbodySystem,
            scientificReferences: this.state.modifiedscienticReferences,
            publishedDate: this.state.modifiedpublishedDate,
            images: this.state.modifiedimages,
            radiologistId: this.state.modifiedradiologistId

        })

        let response = await axios.get(this.url + 'patientsData1/' + modifiedCase._id)
        let modifiedCases = response.data

        let indexToModify = this.state.data.findIndex(
            (u) => u._id === modifiedCase._id
        );
        // clone the task array and insert the cloned task into the cloned array

        let cloned = [
            ...this.state.data.slice(0, indexToModify),
            modifiedCases,
            ...this.state.data.slice(indexToModify + 1)
        ];

        this.setState({
            data: cloned,
            userBeingEdited: 0,
            active: 'AllCasesContent'
        })

    }

      renderEditDisplay = (a) => {
        return (

            <React.Fragment>
                <h3>Editing PatientID: {this.state.modifiedpatientId}</h3>
                <div className="innerbox" style={{ textAlign: 'left' }}>
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
                    <ul >
                        <li>
                            <input name="X-ray" type="radio" value={this.state.modifiedmodality} onChange={this.updateanswer} checked={this.state.modifiedmodality === 'X-ray'} /><label>X-ray</label>
                        </li>
                        <li>
                            <input name="ComputedTomography" type="radio" value={this.state.modifiedmodality} onChange={this.updateanswer} checked={this.state.modifiedmodality === 'ComputedTomography'} /><label>Computed Tomography</label>
                        </li>
                        <li>
                            <input name="Ultrasound" type="radio" value={this.state.modifiedmodality} onChange={this.updateanswer} checked={this.state.modifiedmodality === 'Ultrasound'} /><label>Ultrasound</label>
                        </li>
                        <li>
                            <input name="MRI" type="radio" value={this.state.modifiedmodality} onChange={this.updateanswer} checked={this.state.modifiedmodality === 'MRI'} /><label>MRI</label>
                        </li>
                    </ul>
                    {/* <input */}
                    {/* // type="text"
                        // value={this.state.modifiedmodality}
                        // onChange={(evt) => { */}
                    {/* //     this.setState({ */}
                    {/* //         modifiedmodality: evt.target.value
                        //     });
                        // }}
                        // name="modifiedmodality" */}
                    {/* /> */}

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

                    <br /><br />
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

                    <h6>Radiologist Name:</h6>
                    <input
                        type="text"
                        value={this.state.modifiedradiologistId}
                        onChange={(evt) => {
                            this.setState({
                                modifiedradiologistId: evt.target.value
                            });
                        }}
                        name="modifiedbodysystem"
                    />

                    <br /><br />
                    <h6>Body Systems:</h6>
                    <div>
                        <input type="checkbox" name="modifiedbodysystem" value="Cardiovascular" onChange={this.updateitems} checked={this.state.modifiedbodySystem.includes('Cardiovascular')} /><label>Cardiovascular</label>

                        <input type="checkbox" name="modifiedbodysystem" value="Gastrointestinal" onChange={this.updateitems} checked={this.state.modifiedbodySystem.includes('Gastrointestinal')} /><label>Gastrointestinal</label>

                        <input type="checkbox" name="modifiedbodysystem" value="Endocrine" onChange={this.updateitems} checked={this.state.modifiedbodySystem.includes('Endocrine')} /><label>Endocrine</label>

                        <input type="checkbox" name="modifiedbodysystem" value="Exocrine" onChange={this.updateitems} checked={this.state.modifiedbodySystem.includes('Exocrine')} /><label>Exocrine</label>

                        <input type="checkbox" name="modifiedbodysystem" value="Lymphatic" onChange={this.updateitems} checked={this.state.modifiedbodySystem.includes('Lymphatic')} /><label>Lymphatic</label>

                        <input type="checkbox" name="modifiedbodysystem" value="Muscular" onChange={this.updateitems} checked={this.state.modifiedbodySystem.includes('Muscular')} /><label>Muscular</label>

                        <input type="checkbox" name="modifiedbodysystem" value="Nervous" onChange={this.updateitems} checked={this.state.modifiedbodySystem.includes('Nervous')} /><label>Nervous</label>

                        <input type="checkbox" name="modifiedbodysystems" value="Renal" onChange={this.updateitems} checked={this.state.modifiedbodySystem.includes('Renal')} /><label>Renal</label>

                        <input type="checkbox" name="modifiedbodysystem" value="Reproductive" onChange={this.updateitems} checked={this.state.modifiedbodySystem.includes('Reproductive')} /><label>Reproductive</label>

                        <input type="checkbox" name="modifiedbodysystem" value="Respiratory" onChange={this.updateitems} checked={this.state.modifiedbodySystem.includes('Respiratory')} /><label>Respiratory</label>

                        <input type="checkbox" name="modifiedbodysystem" value="Skeletal" onChange={this.updateitems} checked={this.state.modifiedbodySystem.includes('Skeletal')} /><label>Skeletal</label>

                        {/* <input
                        type="text"
                        value={this.state.modifiedbodySystem}
                        onChange={(evt) => {
                            this.setState({
                                modifiedbodySystem: evt.target.value
                            });
                        }}
                        name="modifiedbodysystem" */}
                        {/* /> */}
                    </div>
                    <br />

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
    }

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
        return <React.Fragment>
            <Tabs activeKey={this.state.key} className="mb-3" id="controlled-tab-example" onSelect={(k) => this.handleSelect(k)} >
                <Tab eventKey='1' title="Case" >
                    {/* {this.state.data.map(patientsData => <header className="containerAllCases" key={patientsData._id}> */}
                        <div className="card-group-all-cases">
                            <div className="card-all-cases">
                                <div className='buttons'>
                                <button className='deletebtn'
                                    onClick={() => {
                                        this.deleteCase(patientsData._id);
                                    }}
                                >Delete</button><br/>
                                <button className='editButtonAllCases' onClick={() => {
                                                    this.beginEdit(patientsData);
                                                }}> Edit
                                                </button>
                                                </div>
                                <img src={patientsData.images} className="card-img-top" alt="..." />
                                <div className="card-body-all-images">
                                    <h5>Case presentation: </h5>
                                    <h6>{patientsData.signsSymptomsTitle}</h6>
                                    <p className="card-text">Patient ID: {patientsData.patientID}</p>
                                    <p className="card-text">Patient's gender: {patientsData.gender}</p>
                                    <p className="card-text">Patient's date of birth {patientsData.dob}</p>
                                    <p className="card-text">Clinical History: {patientsData.clinicalHistory}</p>
                                    <p className="card-text">Modality: {patientsData.modality}</p>
                                    <p className="card-text">Case Discussion: {patientsData.caseDiscussion}</p>
                                    <p className="card-text">Radiologist ID: {patientsData.radiologistId}</p>
                                    <p className="card-text">Published Date: {patientsData.publishedDate}</p>
                                    <p className="card-text">Scientific References: {patientsData.scientificReferences}</p>
                                </div>
                                <div className="card-footer" style={{ textAlign: 'center' }}>

                                    <span><button className='btn btn-secondary'>{patientsData.modality}</button></span>

                                    {patientsData.bodySystems.map(i => <h4><span className="iconsAllCases">{i}</span></h4>)}

                                </div>
                            </div>
                        </div>
                        <hr style={{ height: '5px', size: "10", color: 'red' }} />
                    {/* </header> */}
                    {/* )} */}







                </Tab >
                <Tab eventKey='2' title="Case Images">
                    {/* if (eventKey==='images'){
                                    this.setState({
                                        active:'caseimages'
                                    })
                                } */}
                </Tab>


                <Tab eventKey='3' title="Edit Case" >

                </Tab>

            </Tabs >
            {/* {this.renderContent()} */}

        </React.Fragment >

    }
     })
)
}
}
