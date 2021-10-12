// import React from 'react';
// import axios from 'axios';
// export default class Listing extends React.Component {

//     url = "https://5000-rose-hoverfly-vn9gcaxf.ws-us18.gitpod.io/"

//     state = {
//         data: [

//         ],

//         loading: false
//     }

//     async componentDidMount() {
//         this.setState({
//             'loading': true
//         })
//         await this.fetchData();
//         this.setState({
//             'loading': false
//         })
//     }
    
//     fetchData = async () => {
//         let response = await axios.get(this.url + "patientsData1")
//     if (response.status === 200){
//             this.setState({
//             data: response.data
//         })
//     } else {
        
//      this.setState({
//              data: ['error']
//         })
        
//     }
//    }

//     render() {
//         return <React.Fragment>
//             <h2 style={{ color: 'brown', marginTop: '10px' }}>All Cases:</h2>
//             {this.state.data.map(patientsData => <div className="container" key={patientsData._id}>
//                 <div className="card">
//                     <div className="card-body" >
//                         <h3 className="card-title">
//                             <h5>Case presentation:</h5>
//                             <p><h6>{patientsData.signsSymptomsTitle}</h6></p>
//                         </h3>
//                         <p><h5>Patient ID: {patientsData.patientID}</h5></p>
//                         <p><h5>Gender: {patientsData.gender}</h5></p>
//                         <p><h5>Date of birth: {patientsData.dob}</h5></p>
//                         <h5>Clinical History: </h5>
//                         <p><h6>{patientsData.clinicalHistory}</h6></p>
//                         <div id='flexContainer'>
//                             <img id='caseImgUrl' src={patientsData.images} />
//                             <div id='contents'>
//                                 <p><h5>Imaging Modality: {patientsData.modality}</h5></p>
//                                 <p><h5>Published Date: {patientsData.publishedDate}</h5></p>

//                                 <h5>Case Discussion: </h5>
//                                 <p><h6>{patientsData.caseDiscussion}</h6></p>

//                                 <p><h5>Radiologist ID: {patientsData.radiologistId}</h5></p>
//                                 <h5>Body Systems:</h5>
//                                 <ul>
//                                     {patientsData.bodySystems.map(i => <li key={i}>{i}</li>)}
//                                 </ul>
//                                 <h5>Scientific References: </h5>
//                                 <h6>{patientsData.scientificReferences}</h6>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             )}
//             {this.state.data=='error'? <div>
//             <h1>Error: We have encountered an internal server error</h1>
//         </div> : null}
//         </React.Fragment>

//     }
// }



