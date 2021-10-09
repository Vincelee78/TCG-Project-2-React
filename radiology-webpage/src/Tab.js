import React from 'react'
import Listing from './components/Listing'
import AddNew from './components/AddNew'



export default class Tab extends React.Component {
  state = {
    'active': 'listing',  // indicate which page is active  

    'data': [
      {
        "patientId": 1,
        "gender": "Male",
        "DOB": "2000/07/28",
        "bodySystems": [
          "Skeletal",
          
        ],

        "radiologistId": "A01",
        "studentsTagged": [
          "T01",
          "T02",
          "T03"
        ],

        "clinicalHistory": "High Blood Pressure",
        "signsSymptomsTitle": "Distressed. Sharp pain and swelling on chest area",
        "images": <img src='https://pubs.rsna.org/cms/10.1148/ryct.2020200280/asset/images/medium/ryct.2020200280.fig3.gif'/>,
        "publishedDate": "2021-10-07",

        "scientificReferences": "Kang E. Ribs: a spectrum of abnormalities.(2002)",
        "caseDiscussion": "PA view of chest. Prominent central vascular markings. Clear costophrenic angles.13 pairs of ribs.",

        "modality": [
          "X-ray",
          
        ]
      },


      // {
      //   "patientId": 2,
      //   "gender": "Female",
      //   "DOB": "1998/04/19",
      //   "bodySystems": [
      //     "Skeletal",
      //     "Muscular"
      //   ],


      //   "radiologistId": "A02",
      //   "studentsTagged": [
      //     "T04",
      //     "T05",
      //     "T06"
      //   ],
      //   "clinicalHistory": "Diabetes",
      //   "signsSymptomsTitle": "Swelling, bruising and tenderness of 3rd and 4th fingers of left hand. Deformity and pain present",
      //   "images": "url",
      //   "publishedDate": "2021-06-07",

      //   "scientificReferences": "Fractures of the scaphoid Onur Berber et al., The BMJ: Research, 2020",
      //   "caseDiscussion": "Fracture at the base of the 3rd and 4th middle phalanx. The fracture is almost impossible to see on the AP view. The oblique view gives the best view of the fracture. The oblique view gives the best view of the fracture. This case highlights the importance of using two views in patients with trauma, namely AP and Oblique view.",
      //   "modality": [
      //     "X-ray"
      //   ]
      // },


      // {
      //   "patientId": 3,
      //   "gender": "Female",
      //   "DOB": "1995/02/20",
      //   "bodySystems": [
      //     "Nervous"
      //   ],


      //   "radiologistId": "A03",
      //   "studentsTagged": [
      //     "T07",
      //     "T08",
      //     "T09"
      //   ],
      //   "clinicalHistory": "Development delay",
      //   "signsSymptomsTitle": "New-onset seizures",
      //   "images": "url",
      //   "publishedDate": "2020-02-08",

      //   "scientificReferences": "Changes of gray matter structure of patients with chronic insomnia in magnetic resonance imaging Qin He et al., Chinese Medical Journals Publishing House Co., Ltd., 2021",
      //   "caseDiscussion": "Selected MRI images demonstrate an abnormal white matter, particularly posteriorly and in the periventricular region. It is characterised by bilateral symmetric deep white matter hyperintensity on T2 weighted images, with associated involvement of the subcortical white matter, which results in poor grey-white matter differentiation on T2 weighted images. MRS demonstrates elevation of choline (Cho). Alpha-glutamate peak is not visible. Features are consistent with subsequently established 18q syndrome.",
      //   "modality": [
      //     "MRI"
      //   ],
      // }

    ],


    loading: false
  }




  render() {
    return <React.Fragment>
      <div id='tabcss'>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button className="nav-link active"
              aria-current="page"
              onClick={() => {
                this.setActive('listing')
              }}
            >Case Title</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Case Images</button>
          </li>
          <li className="nav-item">
            <button className={"nav-link"}
              onClick={() => {
                this.setActive('addnew')
              }}
            >Add New Case</button>
          </li>
        </ul>
        {this.renderContent()}
      </div>
    </React.Fragment>
  }

  setActive(nextPage) {
    this.setState({
      'active': nextPage
    })
  }

  afterAddNewRecipe = () => {
    this.setActive('listing')
  }

  renderContent() {
    if (this.state.active == 'listing') {
      return <Listing data={this.state.data} />
    } else if (this.state.active == 'addnew') {
      return <AddNew onAfterAddRecipe={this.afterAddNewRecipe} />
    }
  }
}