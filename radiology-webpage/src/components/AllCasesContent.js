import React from 'react';
import axios from 'axios';
import AddNew from '../components/AddNew';



export default class AllCasesContent extends React.Component {
    state = {
        'active': 'AllCasesContent',
        'data': [

        ],
    }

    url = "https://5000-rose-hoverfly-vn9gcaxf.ws-us18.gitpod.io/"

    
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        let response = await axios.get(this.url + "patientsData1")
        if (response.status === 200) {
            this.setState({
                data: response.data
            })
        }
        else if (response.status != 200) {
            this.setState({
                data: ["error"]
            })

        }
    }

    setActive(nextPage) {
        this.setState({
          'active': nextPage
        })
      }

      renderContent() {
        if (this.state.active == 'addnew') {
           return <AddNew onAfterAddPatient={this.afterAddNewPatient} />
       }  if (this.state.active == 'editCase') {
           return <AllCasesContent />
       }
   }

      afterAddNewPatient = () => {
        this.setActive('AllCasesContent')
      }
    
      setActive(nextPage) {
        this.setState({
            'active': nextPage
        })
    }
    

    render() {
        return <React.Fragment>
        <div id='tabcss'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className="nav-link active"
                        aria-current="page"
                        onClick={() => {
                            this.setActive('AllCasesContent')
                        }}
                    >Case Title</button>
                </li>
                <li className="nav-item">
                    <button className={"nav-link"} onClick={() => {
                        this.setActive('caseImg')
                    }}>Case Images</button>
                </li>
                <li className="nav-item">
                    <button className={"nav-link"}
                        onClick={() => {
                            this.setActive('addnew')
                        }}
                    >Add Case</button>
                </li>
            </ul>
        {this.renderContent()}
                {this.state.data.map(patientsData => <header className="containerAllCases" key={patientsData._id}>
                    <div class="card-group-all-cases">
                        <div class="card-all-cases">
                            <img src={patientsData.images} class="card-img-top" alt="..." />
                            <div class="card-body-all-images">
                                <h5>Case presentation:</h5>
                                <h6>{patientsData.signsSymptomsTitle}</h6>
                                <p class="card-text">Radiologist: {patientsData.radiologistId}</p>
                                <p class="card-text">Published Date: {patientsData.publishedDate}</p>
                            </div>
                            <div class="card-footer" style={{ textAlign: 'center' }}>

                                <a><button className='btn btn-secondary'>{patientsData.modality}</button></a>
                                
                                {patientsData.bodySystems.map(i => <h4><a class="iconsAllCases">{i}</a></h4>)}
                                
                            </div>
                        </div>
                    </div>
                </header>
                )}
                {this.state.data == "error" ? <div>
                    <h1>Error: We have encountered an internal server error</h1>
                </div> : null}
            </div>
            </React.Fragment>
        
    }

}