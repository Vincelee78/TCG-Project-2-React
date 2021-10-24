import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default class RadiologistInfo extends React.Component {
    state = {
        'active': 'RadiologistInfo',

        'data': [

        ],

    }

    url = "https://5000-maroon-anglerfish-ugo6rg5n.ws-us17.gitpod.io/"

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            let response = await axios.get(this.url + "radiologistData")

            this.setState({
                data: response.data
            })

        } catch (e) {
            this.setState({
                active: 'errorMessage'
            })

        }

    }

    render() {
        return (
            <React.Fragment>
                <div className='table'>
                <Table bordered variant="dark">
                    <thead>
                        <tr>
                            
                            <th>ID</th>
                            <th>Name</th>
                            <th>Speciality</th>
        
                            <th>Institution</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((rowData) => (
                            <tr>
                                
                                <td>{rowData.radiologistId}</td>
                                <td>{rowData.radiologistName}</td>
                                <td>{rowData.speciality}</td>
                                <td>{rowData.medicalInstitution}</td>
                                <td>{rowData.email}</td>
                            </tr>

                        ))}

                    </tbody>
                </Table>
                </div>
            </React.Fragment>





        )
    }


}