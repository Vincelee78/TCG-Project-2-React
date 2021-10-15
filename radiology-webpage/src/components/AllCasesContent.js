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

    renderContent() {
        if (this.state.active === 'errorMessage') {
            return <ErrorMessage />
        } if (this.state.active === 'addnew') {
            return <AddNew onAfterAddPatient={this.afterAddNewPatient} />
        } if (this.state.active === 'editCase') {
            return <AllCasesContent />
        }
    }

    afterAddNewPatient = () => {
        this.setActive('AllCasesContent')
    }



    render() {
        return <React.Fragment>
            <Tabs activeKey={this.state.key} className="mb-3" id="controlled-tab-example" onSelect={(k) => this.handleSelect(k)} >
                <Tab eventKey='1' title="Case" >
                    {this.state.data.map(patientsData => <header className="containerAllCases" key={patientsData._id}>
                        <div class="card-group-all-cases">
                            <div class="card-all-cases">
                                <img src={patientsData.images} class="card-img-top" alt="..." />
                                <div class="card-body-all-images">
                                    <h5>Case presentation: </h5>
                                    <h6>{patientsData.signsSymptomsTitle}</h6>
                                    <p class="card-text">Radiologist: {patientsData.radiologistId}</p>
                                    <p class="card-text">Published Date: {patientsData.publishedDate}</p>
                                </div>
                                <div class="card-footer" style={{ textAlign: 'center' }}>

                                    <span><button className='btn btn-secondary'>{patientsData.modality}</button></span>

                                    {patientsData.bodySystems.map(i => <h4><span class="iconsAllCases">{i}</span></h4>)}

                                </div>
                            </div>
                        </div>
                    </header>
                    )}

                
            

        

                
            </Tab >
            <Tab eventKey='2' title="Case Images">
                {/* if (eventKey==='images'){
                                    this.setState({
                                        active:'caseimages'
                                    })
                                } */}
            </Tab>


            <Tab eventKey='3' title="Add Case" >

            </Tab>

        </Tabs >
            { this.renderContent() }
                            
                        </React.Fragment >

    }

}