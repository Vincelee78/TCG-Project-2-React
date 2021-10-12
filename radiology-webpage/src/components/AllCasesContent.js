import React from 'react';
import axios from 'axios';



export default class AllCasesContent extends React.Component{
    state={
        'active': 'AllCasesContent',
        'data': [

        ],
    }

    componentDidMount() {
        this.fetchData();
      }

    url = "https://5000-rose-hoverfly-vn9gcaxf.ws-us18.gitpod.io/"

    fetchData = async () => {
        let response = await axios.get(this.url + "patientsData1")
    if (response.status === 200){
            this.setState({
            data: response.data
        })
    }
}

    render(){
    return (
        <React.Fragment>
        {this.state.data.map(patientsData => <header className="containerAllCases" key={patientsData._id}>
        <div class="card-group-all-cases">        
           <div class="card-all-cases">
          <img src={patientsData.images} class="card-img-top" alt="..."/>
          <div class="card-body-all-images">
          <h5>Case presentation:</h5>
         <h6>{patientsData.signsSymptomsTitle}</h6>
            <p class="card-text">with fries and regular Coke/Coke Zero Sugar/Sprite. Also available as: 2pc Chicken or 2pc Spicy Chicken.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">$5.50 <button type="button" class="btn btn-success">Add to Cart</button></small>
          </div>
        </div>
        </div>
        </header>
        
    )}
    
</React.Fragment>
)}

}