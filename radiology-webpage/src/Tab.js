import React from 'react'
import Listing from './components/Listing'
import AddNew from './components/AddNew'


export default class Tab extends React.Component {
    state = {
        'active': 'listing'  // indicate which page is active
    }

    render() {
        return <React.Fragment>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className="nav-link active" 
                        aria-current="page"
                        onClick={()=>{
                            this.setActive('listing')
                        }}
                        >Case Title</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Case Findings</button>
                </li>
                <li className="nav-item">
                    <button className={"nav-link"}
                        onClick={()=>{
                            this.setActive('addnew')
                        }}
                    >Add New Case</button>
                </li>               
            </ul>
            {this.renderContent()}
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
        if (this.state.active =='listing') {
            return <Listing/>
        } else if (this.state.active == 'addnew') {
            return <AddNew onAfterAddRecipe={this.afterAddNewRecipe}/>
        }
    }
}