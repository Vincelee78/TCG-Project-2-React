// import React from 'react';
// import AddNew from '../components/AddNew'
// import FeaturedCaseContents from './FeaturedCaseContents';
// import SuccessAddMessage from '../components/CaseAddedSuccess';
// import ErrorMessage from '../components/Errormessage';
// import axios from 'axios';

// export default class FeaturedCase extends React.Component {
//     url = "https://5000-rose-hoverfly-vn9gcaxf.ws-us18.gitpod.io/"

//     state = {
//         active: 'featuredCase',

//         data: [

//         ],

//     }

//     // section below is only for setting the active state to 'errorMessage' and 
//     // displaying the server down error message 
//     // does not use the response data

//     componentDidMount() {
//         this.fetchData();
//     }

//     fetchData = async () => {
//         try {
//             await axios.get(this.url + "featuredCase")
//             this.setState({
//                 active: 'featuredCaseContents'
//             })

//         } catch (e) {
//             this.setState({
//                 active: 'errorMessage'
//             })

//         }

//     }

//     renderContent() {
//         if(this.state.active === 'errorMessage'){
//             return <ErrorMessage/> 
//         }if(this.state.active === 'featuredCaseContents'){
//             return <FeaturedCaseContents/> 
//         }if(this.state.active === 'successAddMessage'){
//                 return <SuccessAddMessage/> 
//         } if (this.state.active === 'addnew') {
//             return <AddNew onAfterAddPatient={this.afterAddNewPatient} />
//         }  
//     }

//     setActive(nextPage) {
//         this.setState({
//             'active': nextPage
//         })
//     }

//     afterAddNewPatient = () => {
//         this.setActive('successAddMessage')
//     }

//     render() {
//         return <React.Fragment>
//             <div id='tabcss'>
//                 <ul className="nav nav-tabs">
//                     <li className="nav-item">
//                         <button className="nav-link active"
//                             aria-current="page"
//                             onClick={() => {
//                                 this.setActive('featuredCaseContents')
//                             }}
//                         >Case Title</button>
//                     </li>
//                     <li className="nav-item">
//                         <button className={"nav-link"}
//                             onClick={() => {
//                                 this.setActive('addnew')
//                             }}
//                         >Add Case</button>
//                     </li>
//                 </ul>
//                 {this.renderContent()}
                
                                
//             </div>
//         </React.Fragment>

//     }
// }