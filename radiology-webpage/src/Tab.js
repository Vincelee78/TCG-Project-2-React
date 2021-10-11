import React from 'react'
import Listing from './components/Listing'
import AddNew from './components/AddNew'
import AllCasesContent from './components/AllCasesContent'



export default class Tab extends React.Component {
  state = {
    'active': 'listing',  // indicate which page is active  

    'data': [

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
    this.setActive('listing')
  }

  renderContent() {
    if (this.state.active == 'listing') {
      return <Listing data={this.state.data} />
    } else if (this.state.active == 'addnew') {
      return <AddNew onAfterAddPatient={this.afterAddNewPatient} />
    } else if (this.state.active == 'AllcasesContent') {
      return <AllCasesContent />
    }
  }
}