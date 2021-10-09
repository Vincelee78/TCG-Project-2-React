import React from 'react'
import axios from 'axios'
// export default class Listing extends React.Component {

// url = "https://8888-copper-tahr-20npvdcv.ws-us18.gitpod.io/"

// state = {
//     'data': [ 

//     ],
//     loading:false
// }

export default function Listing(props) {
    return <React.Fragment>
        <div className="container">
            <h2 style={{ color: 'brown' }}>Featured Case</h2>
            {props.data.map(r => <React.Fragment key={r.patientId}>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">
                            <h5>Case presentation:</h5>
                            <h6>{r.signsSymptomsTitle}</h6>
                        </h3>
                        <h5>Patient ID: {r.patientId}</h5>
                        <h5>Gender: {r.gender}</h5>
                        <h5>Date of birth: {r.DOB}</h5>
                        <div id='flexContainer'>
                        <h5 id='caseImgUrl'>{r.images}</h5>
                        <div id='contents'>
                        <h5>Clinical History: {r.clinicalHistory}</h5>
                        <h5>Imaging Modality:</h5>
                        <ul>
                            {r.modality.map(i => <li key={i}>{i}</li>)}
                        </ul>
                        <h5>Published Date: {r.publishedDate}</h5>
                        <h5>Scientific References: {r.scientificReferences}</h5>
                        <h5>Case Discussion: {r.caseDiscussion}</h5>
                        <h5>Radiologist ID: {r.radiologistId}</h5>
                        <h5>Students Tagged IDs:</h5>
                        <ul>
                            {r.studentsTagged.map(i => <li key={i}>{i}</li>)}
                        </ul>
                        <h5>Body Systems:</h5>
                        <ul>
                            {r.bodySystems.map(i => <li key={i}>{i}</li>)}
                        </ul>
                        </div>
                    </div>
                  </div>
                </div>
            </React.Fragment>)}
        </div>
    </React.Fragment>
}




    // async componentDidMount() {
    //     this.setState({
    //         'loading':true
    //     })
    //     await this.fetchData();
    //     this.setState({
    //         'loading':false
    //     })
    // }

    // fetchData = async () => {
    //     let response = await axios.get(this.url + "recipes")
    //     this.setState({
    //         'data': response.data
    //     })
    // }

    // render() {
    //     return <React.Fragment>
    //         {this.state.data.map( recipe => <div className="card my-3" key={recipe._id}>
    //             <div className="card-body">
    //                 <h3 className="card-title">{recipe.title}</h3>
    //                 <h4>Ingredients</h4>
    //                 <ul>
    //                     {recipe.ingredients.map( ingredient => <li key={ingredient}>{ingredient}</li>)}
    //                 </ul>
    //             </div>
    //         </div>)}
    //     </React.Fragment>
    // }
// }
