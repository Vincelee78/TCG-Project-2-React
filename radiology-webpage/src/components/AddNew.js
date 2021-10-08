import React from 'react'
import axios from 'axios'

export default class AddNew extends React.Component {
    state = {
        'title':'',
        'ingredients':''
    }

    updateFormField = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    url = "https://8888-copper-tahr-20npvdcv.ws-us18.gitpod.io/"

    render() {
        return <React.Fragment>
            <div>
                <label className="form-label">Title</label>
                <input type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.updateFormField}
                    className="form-control"
                />
            </div>
            <div>
                <label className="form-label">Ingredients</label>
                <input type="text"
                       name="ingredients"
                       value={this.state.ingredients}
                       onChange={this.updateFormField}
                       className="form-control"
                />
            </div>
            <button onClick={this.addRecipe}
                    className="my-3 btn btn-primary btn-sm">Add</button>


        </React.Fragment>
    }

    addRecipe = async () => {
        let recipe = await axios.post(this.url + 'recipes', {
            title: this.state.title,
            ingredients: this.state.ingredients.split(',')
        })
        // in a class-based component, to access the
        // props, we use `this.props`
        this.props.onAfterAddRecipe()
    }
}