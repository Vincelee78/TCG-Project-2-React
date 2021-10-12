import React from 'react';
import axios from 'axios';



export default class AllCasesContent extends React.Component {
    state = {
        'active': 'AllCasesContent',
        'data': [

        ],
    }

    componentDidMount() {
        this.fetchData();
    }

    url = "https://5000-rose-hoverfly-vn9gcaxf.ws-us18.gitpod.io/"

    fetchData = async () => {
        let response = await axios.get(this.url + "patientsData1")
        if (response.status === 200) {
            this.setState({
                data: response.data
            })
        }
    }

    render() {
        return (
            <React.Fragment>
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

            </React.Fragment>
        )
    }

}