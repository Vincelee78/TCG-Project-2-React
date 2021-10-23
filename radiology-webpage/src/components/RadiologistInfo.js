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
            let response = await axios.get(this.url + "allradiologistData")

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
                <Table bordered variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Radiologist's ID</th>
                            <th>Radiologist's Name</th>
                            <th>Radiologist's Speciality</th>
                            <th>Radiologist's Medical Institution</th>
                            <th>Radiologist's Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((rowData, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{rowData.radiologistId}</td>
                                <td>{rowData.radiologistName}</td>
                                <td>{rowData.speciality}</td>
                                <td style={{textAlign:'center'}}>{rowData.medicalInstitution}</td>
                                <td>{rowData.email}</td>
                            </tr>

                        ))}

                    </tbody>
                </Table>

            </React.Fragment>





        )
    }


}