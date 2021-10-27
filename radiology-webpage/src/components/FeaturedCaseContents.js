import React from "react";
import axios from "axios";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AddNew from '../components/AddNew'
import SuccessAddMessage from '../components/CaseAddedSuccess';
import Accordion from 'react-bootstrap/Accordion';
import AddReport from "../components/AddReport";
import 'bootstrap/dist/css/bootstrap.min.css';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import SuccessAddReport from "../components/ReportAddedSuccess";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';
import Search from "./Search";
import ErrorMessage from "../components/Errormessage";







export default class CarouselComponent extends React.Component {

    url = "https://5000-maroon-anglerfish-ugo6rg5n.ws-us18.gitpod.io/"

    state = {
        'active': 'featuredCase',
        key: '1',
        open: false,

        data: [

        ],


        radiologistdata: [],

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
        show: false,
        setsShow: false,
        radiologistId: '',
        radiologistName: '',
        radiologistSpeciality: '',
        radiologistmedicalInstitution: '',
        radiologistEmail: '',


    }

    renderTooltip = () => (
        <Tooltip >Favourite this case</Tooltip>
    );

    componentDidMount() {
        this.fetchData();
        this.retrieveRadiologistInfo();

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



    renderContent() {

        if (this.state.active === 'successAddMessage') {
            return <SuccessAddMessage />
        } if (this.state.active === 'successAddReport') {
            return <SuccessAddReport />
        } if (this.state.active === 'addnew') {
            return <AddNew onAfterAddPatient={this.afterAddNewPatient} />
        } if (this.state.active === 'addReport') {
            return <AddReport onAfterAddReport={this.afterAddNewReport} />
        } if (this.state.active === 'Search') {
            return <Search />
        } if (this.state.active === 'errorMessage') {
            return <ErrorMessage />
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

    getDate() {
        let date = new Date()
        date = String(date)
        date = date.slice(4, 15)
        return date
    }


    handleClose = () => {
        this.setState({
            show: false
        })
    }


    handleShow = () => {
        this.state.radiologistdata.map(data => {

            this.setState({
                show: true,
                radiologistId: data.radiologistId,
                radiologistName: data.radiologistName,
                radiologistSpeciality: data.speciality,
                radiologistmedicalInstitution: data.medicalInstitution,
                radiologistEmail: data.email,

            })
        })
    }


    handleSelect = (key) => {
        if (key === '1') {
            this.setState({
                key: key,
                active: 'featuredCase'
            })

        } else if (key === '2') {
            this.setState({
                key: key,
                active: 'addReport'
            })

        } else if (key === '3') {
            this.setState({
                key: key,
                active: 'addnew'
            })
        } else if (key === '4') {
            this.setState({
                key: key,
                active: 'Search'
            })
        }
    }
    afterAddNewPatient = () => {
        this.setActive('successAddMessage')
    }

    afterAddNewReport = () => {
        this.setActive('successAddReport')
    }

    retrieveRadiologistInfo = async () => {

        let response = await axios.get(this.url + 'radiologistDataFeatured/')

        this.setState({
            radiologistdata: response.data,

        })

    }

    // renderRadiologistInfo = () => {
    //     return (
    //             this.state.radiologistdata.map(data1=>{
    //         <React.Fragment>
    //             <Modal show={this.state.show} onHide={this.handleClose}>
    //                 <Modal.Header closeButton>
    //                     <Modal.Title>Radiologist-{data1.radiologistId} Info:</Modal.Title>
    //                 </Modal.Header>
    //                 <Modal.Body>
    //                     <div>
    //                         <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Patient ID:</h5>{data1.radiologistId}</p>
    //                         <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Patient's gender:</h5> {data1.radiologistName}</p>
    //                         <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Patient's date of birth</h5> {data1.speciality}</p>
    //                         <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Clinical History:</h5> {data1.medicalInstitution}</p>
    //                         <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Modality: </h5>{data1.email}</p>
    //                     </div>
    //                 </Modal.Body>

    //                 <Modal.Footer>
    //                     <Button variant="secondary" onClick={this.handleClose}>
    //                         Close
    //                     </Button>
    //                     <Button variant="primary" onClick={this.handleClose}>
    //                         Save Changes
    //                     </Button>
    //                 </Modal.Footer>
    //             </Modal>



    //         </React.Fragment>
    //             })
    //     )
    // }


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
        await axios.put(this.url + 'featuredCase/' + modifiedCase._id, {
            // let modifiedUser = { ...user1 };

            // make changes to the clone
            // modified task we have changed
            // modifiedUser._id is the orginal clone id
            // modifiedUser.name is the orginal clone name
            // this.state.modifiedUsername refer to begin edit(user) function, user.name
            // _id: this.state.userBeingEdited,
            patientID: this.state.modifiedpatientId,
            signsSymptomsTitle: this.state.modifiedsignSymptomsTitle,
            gender: this.state.modifiedGender,
            dob: this.state.modifieddob,
            clinicalHistory: this.state.modifiedclinicalHistory,
            modality: this.state.modifiedmodality,
            caseDiscussion: this.state.modifiedcaseDiscussion,
            bodySystems: this.state.modifiedbodySystem,
            scientificReferences: this.state.modifiedscienticReferences,
            publishedDate: this.getDate(),
            images: this.state.modifiedimages,
            radiologistId: this.state.modifiedradiologistId

        })

        let response = await axios.get(this.url + 'featuredCase/' + modifiedCase._id)
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

        // console.log(cloned)


        this.setState({
            data: cloned,
            userBeingEdited: 0,
            active: 'featuredCase'
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

                    <h6>Published Date:</h6>
                    <input
                        type="text"
                        value={this.getDate()}
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
                        name="modifiedbodysystem" disabled
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
                        <React.Fragment>
                            <p style={{ color: 'brown', marginTop: '10px', fontSize: '30px' }}>Featured Case: COVID-19 positive patient</p>
                            <Accordion defaultActiveKey="0" className='infoTab' flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Information on Featured Case</Accordion.Header>
                                    <Accordion.Body>
                                        <p><strong>COVID-19 (coronavirus disease 2019)</strong> is a viral infectious disease caused by
                                            <strong> SARS-CoV-2</strong> and is currently a World Health Organizatiοn (WHO) declared pandemic.
                                            As of October 2021, over 200 million people had been infected globally with over
                                            4.5 million deaths.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Clinical Presentation</Accordion.Header>
                                    <Accordion.Body>
                                        <p>Many people with SARS-CoV-2 infection are asymptomatic. Symptoms and signs of COVID-19 are non-specific but in symptomatic individuals most commonly include:</p>
                                        <ul>
                                            <li>fever (85-90%)</li>
                                            <li>cough (65-70%) with sputum (30-35%)</li>
                                            <li>smell and taste disturbances (50%)</li>
                                            <li>fatigue (35-40%)</li>
                                            <li>shortness of breath (15-20%)</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Complications</Accordion.Header>
                                    <Accordion.Body>
                                        <p>The likelihood of severe illness requiring hospitalisation correlates closely with male sex, advanced age and presence of comorbidities.</p>
                                        <ul>
                                            <li>~5% admitted patients require ICU admission</li>
                                        </ul>
                                        <p>Multiple serious sequelae have been reported including:</p>
                                        <ul>
                                            <li>acute respiratory distress syndrome (ARDS)</li>
                                            <li>coagulopathy: including PE and DIC</li>
                                            <li>secondary infections, e.g. bacterial pneumonia</li>
                                            <li>myocardial injury</li>
                                            <li>sepsis</li>
                                            <li>acute kidney injury (AKI)</li>
                                            <li>multiorgan failure</li>
                                            <li>secondary haemophagocytic lymphohistiocytosis</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Radiographic features</Accordion.Header>
                                    <Accordion.Body>
                                        <p>The primary findings of COVID-19 are those of an atypical or organising pneumonia. Up to 18% of cases demonstrate normal chest x-rays or CT when mild/early in the disease course. Bilateral and/or multilobar involvement is common, more often with a lower zone distribution.</p>
                                        <h5>Plain radiograph:</h5>
                                        <ul>
                                            <li>patchy or diffuse airspace opacities, whether consolidation or ground-glass opacity</li>
                                            <li>pleural effusion is rare </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Differential diagnosis</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>influenza or parainfluenza virus and other causes of atypical pneumonia</li>
                                            <li>interstitial lung disease (ILD)</li>
                                            <li>pulmonary oedema</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <React.Fragment key={patientsData._id}>

                                <Tabs activeKey={this.state.key} className="mb-3" id="controlled-tab-example" onSelect={(k) => this.handleSelect(k)} >
                                    <Tab eventKey='1' title="Featured Case" >



                                        <div className="container fluid" key={patientsData._id}>
                                            <div className="card">
                                                <div className="card-body" >
                                                    <div className="card-title">
                                                        <div className='reviewFlex'>
                                                            <h5 style={{ color: 'rgb(0, 175, 185)' }}>Case presentation:</h5>

                                                            <OverlayTrigger className='reviews' placement="top" overlay={this.renderTooltip()}>

                                                                <span className='rating'>

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
                                                        </div>

                                                        <p>{patientsData.signsSymptomsTitle}</p>

                                                    </div>

                                                    <h5 style={{ color: 'rgb(0, 175, 185)' }}>Patient ID:</h5> <p>{patientsData.patientID}</p>
                                                    <h5 style={{ color: 'rgb(0, 175, 185)' }}>Gender: </h5> <p>{patientsData.gender}</p>
                                                    <h5 style={{ color: 'rgb(0, 175, 185)' }}>Date of birth:</h5> <p>{patientsData.dob}</p>
                                                    <h5 style={{ color: 'rgb(0, 175, 185)' }}>Clinical History: </h5>
                                                    <p>{patientsData.clinicalHistory}</p>
                                                    <div id='flexContainer'>
                                                        <img id='caseImgUrl' alt='' src={patientsData.images} />
                                                        <div id='contents' style={{ paddingTop: '20px' }}>
                                                            <h5 style={{ color: 'rgb(0, 175, 185)' }}>Imaging Modality:</h5> <p>{patientsData.modality}</p>
                                                            <h5 style={{ color: 'rgb(0, 175, 185)' }}>Published Date:</h5> <p>{patientsData.publishedDate}</p>

                                                            <h5 style={{ color: 'rgb(0, 175, 185)' }}>Case Discussion: </h5>
                                                            <p>{patientsData.caseDiscussion}</p>

                                                            <h5 style={{ color: 'rgb(0, 175, 185)' }}>Radiologist ID: </h5><p style={{ cursor: 'pointer', color: 'blue' }} variant="primary" onClick={this.handleShow} >{patientsData.radiologistId}</p>
                                                            <Modal show={this.state.show} onHide={this.handleClose}>
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Radiologist-{patientsData.radiologistId}:</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>

                                                                    <div>
                                                                        <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Radiologist's ID:</h5>{this.state.radiologistId}</p>
                                                                        <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Radiologist's Name:</h5> {this.state.radiologistName}</p>
                                                                        <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Radiologist's Speciality:</h5> {this.state.radiologistSpeciality}</p>
                                                                        <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Radiologist's Medical Institution:</h5> {this.state.radiologistmedicalInstitution}</p>
                                                                        <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Radiologist's Email: </h5>{this.state.radiologistEmail}</p>
                                                                    </div>



                                                                </Modal.Body>

                                                                <Modal.Footer>
                                                                    <Button variant="secondary" onClick={this.handleClose}>
                                                                        Close
                                                                    </Button>
                                                                    <Button variant="primary" onClick={this.handleClose}>
                                                                        Save Changes
                                                                    </Button>
                                                                </Modal.Footer>
                                                            </Modal>


                                                            <h5 style={{ color: 'rgb(0, 175, 185)' }}>Body Systems:</h5>
                                                            <ul>
                                                                {patientsData.bodySystems.map(i => <li key={i._id}>{i}</li>)}
                                                            </ul>
                                                            <h5 style={{ color: 'rgb(0, 175, 185)' }}>Scientific References: </h5>
                                                            <h6>{patientsData.scientificReferences}</h6>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <button className='my-3 btn btn-success' onClick={() => {
                                                this.beginEdit(patientsData);
                                            }}> Edit Case
                                            </button>

                                        </div>
                                    </Tab>
                                    <Tab eventKey='2' title="Create New Report">

                                    </Tab>


                                    <Tab eventKey='3' title="Add Case" >

                                    </Tab>

                                    <Tab eventKey='4' title="Search Cases" >
                                        
                                    </Tab>

                                </Tabs>
                                {this.renderContent()}
                            </React.Fragment>
                        </React.Fragment >


                    )

                }
                // })
            })

        )
    }

}
