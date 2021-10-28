import React from 'react';
import axios from 'axios';
import ErrorMessage from '../components/Errormessage';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from "react-bootstrap/Tooltip";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';
import { format } from 'date-fns';



export default class AllCasesContent extends React.Component {
    state = {
        'active': 'AllCasesContent',
        key: '1',
        open: false,
        'data': [

        ],
        userBeingEdited: 0,
        modifiedpatientId: '',
        modifiedGender: '',
        modifieddob: null,
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
        filters: '',
        radiologistdata: [],
        radiologistIdBeingMatched: '',

    }

    url = "https://expressvwxl777.herokuapp.com/"

    renderTooltip = () => (
        <Tooltip >Favourite this case</Tooltip>
    );

    componentDidMount() {
        this.fetchData();
        this.retrieveRadiologistInfo();
    }

    fetchData = async () => {
        try {
            let response = await axios.get(this.url + "patientsDataAllCases")

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


    handleShow = (patientsData) => {
        this.state.radiologistdata.map(data => {

            if (patientsData.radiologistId === data._id) {
                this.setState({
                    show: true,
                    radiologistIdBeingMatched: patientsData.radiologistId,
                    radiologistId: data.radiologistId,
                    radiologistName: data.radiologistName,
                    radiologistSpeciality: data.speciality,
                    radiologistmedicalInstitution: data.medicalInstitution,
                    radiologistEmail: data.email,

                })

            }
        })

    }



    handleSelect = (key) => {
        if (key === '1') {
            this.setState({
                key: key,
                active: 'AllCasesContent'
            })

            this.fetchData();

        }

    }

    afterAddNewPatient = () => {
        this.setActive('AllCasesContent')
    }

    retrieveRadiologistInfo = async () => {

        let response = await axios.get(this.url + 'allRadiologistDataforAllCases/')

        this.setState({
            radiologistdata: response.data,

        })

    }

    filterAgeMore60 = async (evt) => {
        let response = await axios.get(this.url + "filterAgeMore60/")



        this.setState({
            filters: evt.target.value,
            data: response.data
        })

    }

    filterAgeLess21 = async (evt) => {
        let response = await axios.get(this.url + "filterAgeLess21/")



        this.setState({
            filters: evt.target.value,
            data: response.data
        })

    }

    ModalityFilter = async (evt) => {
        let response = await axios.get(this.url + "modalityUltrasound/")



        this.setState({
            filters: evt.target.value,
            data: response.data
        })

    }

    systemsFilter = async (evt) => {
        let response = await axios.get(this.url + "cardioEndocrineSystem/")



        this.setState({
            filters: evt.target.value,
            data: response.data
        })

    }


    deleteCase = async (caseId) => {
        console.log(this.state.data)
        console.log('Id', caseId)
        await axios.delete(this.url + "patientsDataAllCases/" + caseId)

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

    };

    beginEdit = (patientsData) => {
        this.setState({
            userBeingEdited: patientsData._id,
            modifiedpatientId: patientsData.patientID,
            modifiedGender: patientsData.gender,
            modifieddob: patientsData.dob,
            modifiedclinicalHistory: patientsData.clinicalHistory,
            modifiedmodality: patientsData.modality,
            modifiedpublishedDate: this.getDate(),
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
        await axios.put(this.url + 'updateEditedPatientCase/' + modifiedCase._id, {


            // make changes to the clone
            patientID: this.state.modifiedpatientId,
            signsSymptomsTitle: this.state.modifiedsignSymptomsTitle,
            gender: this.state.modifiedGender,
            dob: format(new Date(this.state.modifieddob), 'yyyy-MM-dd'),
            clinicalHistory: this.state.modifiedclinicalHistory,
            modality: this.state.modifiedmodality,
            caseDiscussion: this.state.modifiedcaseDiscussion,
            bodySystems: this.state.modifiedbodySystem,
            scientificReferences: this.state.modifiedscienticReferences,
            publishedDate: this.state.modifiedpublishedDate,
            images: this.state.modifiedimages,
            radiologistId: this.state.modifiedradiologistId

        })

        let response = await axios.get(this.url + 'retrieveEditedPatientCase/' + modifiedCase._id)
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


                    <h6>Revised Date:</h6>
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


                    <button className='btn btn-success' onClick={() => {
                        this.updateCase(a);
                    }}> Confirm </button>

                </div>

            </React.Fragment>

        );
    }

    displayModal = () => {
        this.state.data.map(patientsData => {
            if (this.state.radiologistId === patientsData.radiologistId) {
                return (<Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Radiologist-{this.state.radiologistId}:</Modal.Title>
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
                </Modal>)
            }
        })
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

                        <div>
                            <label className="form-label">Filter cases by:</label>
                            <ul>

                                <p><input name="filterAgeLess21" type="radio" value="21Lesser" onChange={this.filterAgeLess21} checked={this.state.filters === '21Lesser'} /><label>&nbsp;Patients younger than 21</label></p>

                                <p><input name="filterAgeMore60" type="radio" value="60Older" onChange={this.filterAgeMore60} checked={this.state.filters === '60Older'} /><label>&nbsp;Patients older than 60</label></p>

                                <p><input name="modalityUltrasound" type="radio" value="ultrasound" onChange={this.ModalityFilter} checked={this.state.filters === 'ultrasound'} /><label>&nbsp;Ultrasound cases</label></p>

                                <p><input name="systemsCardioEndocrine" type="radio" value="cardioEndocrine" onChange={this.systemsFilter} checked={this.state.filters === 'cardioEndocrine'} /><label>&nbsp;Cardiovascular/Endocrine Systems</label></p>

                            </ul>
                        </div>

                        <Tabs activeKey={this.state.key} className="mb-3" id="controlled-tab-example" onSelect={(k) => this.handleSelect(k)} >
                            <Tab eventKey='1' title="All Cases" >


                                <div className="card-group-all-cases">
                                    <div className="card-all-cases">
                                        <div className='buttonsAllCases'>
                                            <button className='deletebtn btn btn-danger'
                                                onClick={() => {
                                                    this.deleteCase(patientsData._id);
                                                }}
                                            >Delete</button><br />
                                            <button className='editButtonAllCases btn btn-success' onClick={() => {
                                                this.beginEdit(patientsData);
                                            }}> Edit
                                            </button>

                                        </div>

                                        <div className='displayReviews'>
                                            <img src={patientsData.images} className="card-img-top" alt="..." />

                                            <OverlayTrigger className='reviewsAllCasesBtn' placement="bottom" overlay={this.renderTooltip()}>

                                                <p className='rating' >

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

                                                </p>
                                            </OverlayTrigger>
                                        </div>
                                        <div className="card-body-all-images">
                                            <h5 style={{ color: 'rgb(56, 54, 154)' }}>Case presentation: </h5>
                                            <h6>{patientsData.signsSymptomsTitle}</h6>

                                            {/* Conditional rendering to display Patient ID if it only has a value/ Removed Patient ID during the search filtering using radio buttons*/}

                                            {
                                                patientsData.patientID ?
                                                    <React.Fragment>
                                                        <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Patient ID:</h5>{patientsData.patientID}</p>
                                                    </React.Fragment> : ""
                                            }
                                            <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Patient's gender:</h5> {patientsData.gender}</p>
                                            <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Patient's date of birth</h5> {format(new Date(patientsData.dob), 'yyyy-MM-dd')}</p>
                                            <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Clinical History:</h5> {patientsData.clinicalHistory}</p>
                                            <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Modality: </h5>{patientsData.modality}</p>
                                            <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Case Discussion:</h5> {patientsData.caseDiscussion}</p>
                                            <h5 style={{ color: 'rgb(56, 54, 154)' }} className="card-text">Radiologist ID:</h5><p style={{ cursor: 'pointer', color: 'blue' }} variant="primary" onClick={() => {
                                                this.handleShow(patientsData)
                                            }}> {patientsData.radiologistId}</p>

                                            <Modal show={this.state.show} onHide={this.handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Radiologist-{this.state.radiologistId}:</Modal.Title>
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

                                            <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Published Date (revised):</h5> {patientsData.publishedDate}</p>
                                            <p className="card-text"><h5 style={{ color: 'rgb(56, 54, 154)' }}>Scientific References:</h5> {patientsData.scientificReferences}</p>
                                        </div>
                                        <div className="card-footer" style={{ textAlign: 'center' }}>

                                            <span><button className='btn btn-secondary'>{patientsData.modality}</button></span>

                                            {patientsData.bodySystems.map(i => <h5><span className="iconsAllCases">{i}</span></h5>)}



                                        </div>
                                    </div>


                                </div>
                                <hr style={{ height: '5px', size: "10", color: 'red' }} />


                            </Tab >
                            <Tab eventKey='2' title="">

                            </Tab>


                            <Tab eventKey='3' title="" >

                            </Tab>

                        </Tabs >


                    </React.Fragment >

                }
            })
        )
    }
}
