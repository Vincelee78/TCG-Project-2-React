import React from 'react'
import AddNew from '../components/AddNew'
import AllCasesContent from '../components/AllCasesContent'
import Listing from '../components/Listing'



export default class AllCasesTab extends React.Component {
  state = {
    'active': 'AllCasesTab',  // indicate which page is active  

    'data': [

    ],

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

  afterAddNewPatient = () => {
    this.setActive('AllCasesTab')
  }

  renderContent() {
    if (this.state.active == 'AllCasesTab') {
      return <Listing data={this.state.data} />
    } else if (this.state.active == 'addnew') {
      return <AddNew onAfterAddPatient={this.afterAddNewPatient} />
    } else if (this.state.active == 'CaseImg') {
      return <AllCasesContent />
    }
  }
}