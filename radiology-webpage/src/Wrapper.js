// import React from 'react';
// import Tab from './Tab';
// import AllCasesContent from './components/AllCasesContent';

// export default class Wrapper extends React.Component {
//     state = {
//         'active': 'listing',  // indicate which page is active
        
//       }

//       setActive = (page) => {
//         this.setState({
//             'active': page
//         })
//     }

//     renderContent() {
//         if (this.state.active === "AllCasesContent") {
//           return (
//             <React.Fragment>
//               <AllCasesContent />
//             </React.Fragment>
//           )
//         }
//     }

//     render(){
//     return (
//         <React.Fragment>
//             <div class="wrapper">
//                 <div class='fixed-bg bg-1'>
//                     <p class="title" id="title1"><Tab /></p>
//                     {this.renderContent()}
//                 </div>
//                 <div class="fixed-bg bg-2"><a class="title1"> </a></div>
//                 <div class="fixed-bg bg-3"><a class="title2"></a></div>
//                 </div>

//                 </React.Fragment>
//                 )
// }
// }