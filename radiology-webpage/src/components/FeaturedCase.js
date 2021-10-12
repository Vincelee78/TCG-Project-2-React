import React from 'react';
import axios from 'axios';
import AddNew from '../components/AddNew'
import FeaturedCaseContents from './FeaturedCaseContents';
import SuccessAddMessage from '../components/CaseAddedSuccess';

export default class FeaturedCase extends React.Component {

    state = {
        active: 'featuredCaseContents',

        data: [

        ],

    }


    renderContent() {
        if(this.state.active == 'featuredCaseContents'){
            return <FeaturedCaseContents/> 
        }if(this.state.active == 'successAddMessage'){
                return <SuccessAddMessage/> 
        } if (this.state.active == 'addnew') {
            return <AddNew onAfterAddPatient={this.afterAddNewPatient} />
        }  
    }

    setActive(nextPage) {
        this.setState({
            'active': nextPage
        })
    }

    afterAddNewPatient = () => {
        this.setActive('successAddMessage')
    }

    render() {
        return <React.Fragment>
            <div id='tabcss'>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button className="nav-link active"
                            aria-current="page"
                            onClick={() => {
                                this.setActive('featuredCaseContents')
                            }}
                        >Case Title</button>
                    </li>
                    <li className="nav-item">
                        <button className={"nav-link"}
                            onClick={() => {
                                this.setActive('addnew')
                            }}
                        >Add Case</button>
                    </li>
                </ul>
                {this.renderContent()}
                
                                
            </div>
        </React.Fragment>

    }
}