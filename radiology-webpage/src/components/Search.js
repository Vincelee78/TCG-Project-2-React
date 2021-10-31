import React from "react";
import axios from "axios";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Modal";

export default class Search extends React.Component {
    state = {
        active: "Search",
        // default empty string for search input value
        search: "",
        // default empty data for search data
        dataSearch: [],
    };

    // Base url
    url = "https://expressvwxl777.herokuapp.com/";

    // Tooltip for display of words in the background for ratings
    renderTooltip = () => <Tooltip>Favourite this case</Tooltip>;

    // Retreive case data from server API using user search input value
    setActiveSearch = async () => {
        try {
            await axios
                .get(this.url + "searchCases/", {
                    // parameter for user search input value
                    params: {
                        search: this.state.search,
                    },
                })
                // then set the search data with the data being retrieved from the server API using user search input
                .then((res) => {
                    this.setState({
                        dataSearch: res.data,
                    });
                });

            // error message when unable to get data
        } catch (e) {
            this.setState({
                active: "errorMessage",
            });
        }
    };
    // set the active search value to the user search input value
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    // display the cases accordingly to the user search input
    display = () => {
        return this.state.dataSearch.map((patientsData) => {
            return (
                <React.Fragment>
                    <h1 style={{ color: "rgb(202, 103, 2)" }}>
                        Search Results: {this.state.search}
                    </h1>
                    <div className="container fluid" key={patientsData._id}>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <div className="reviewFlex">
                                        <h5 style={{ color: "rgb(0, 175, 185)" }}>
                                            Case presentation:
                                        </h5>
                                        {/* Tooltip to display the background words for the ratings feature*/}
                                        <OverlayTrigger
                                            className="reviews"
                                            placement="top"
                                            overlay={this.renderTooltip()}
                                        >
                                            {/* Heart icon ratings feature */}
                                            <span className="rating">
                                                <input
                                                    type="radio"
                                                    value="5"
                                                    name="rating"
                                                    id="rating-5"
                                                />
                                                <label for="rating-5" title="5 stars">
                                                    <i class="fas fa-heart"></i>
                                                </label>
                                                <input
                                                    type="radio"
                                                    value="4"
                                                    name="rating"
                                                    id="rating-4"
                                                />
                                                <label for="rating-4" title="4 stars">
                                                    <i class="fas fa-heart"></i>
                                                </label>
                                                <input
                                                    type="radio"
                                                    value="3"
                                                    name="rating"
                                                    id="rating-3"
                                                />
                                                <label for="rating-3" title="3 stars">
                                                    <i class="fas fa-heart"></i>
                                                </label>
                                                <input
                                                    type="radio"
                                                    value="2"
                                                    name="rating"
                                                    id="rating-2"
                                                />
                                                <label for="rating-2" title="2 stars">
                                                    <i class="fas fa-heart"></i>
                                                </label>
                                                <input
                                                    type="radio"
                                                    value="1"
                                                    name="rating"
                                                    id="rating-1"
                                                />
                                                <label for="rating-1" title="1 stars">
                                                    <i class="fas fa-heart"></i>
                                                </label>
                                            </span>
                                        </OverlayTrigger>
                                    </div>

                                    <p>{patientsData.signsSymptomsTitle}</p>
                                </div>
                                <h5 style={{ color: "rgb(0, 175, 185)" }}>Patient ID:</h5>
                                <p>{patientsData.patientID}</p>
                                {/* Conditional rendering to display patient gender if it only has a value/ Remove patient gender field if there is no value from server projection criteria*/}
                                {patientsData.gender ? (
                                    <React.Fragment>
                                        <h5 style={{ color: "rgb(0, 175, 185)" }}>Gender: </h5>
                                        <p>{patientsData.gender}</p>
                                    </React.Fragment>
                                ) : ("")}
                                <h5 style={{ color: "rgb(0, 175, 185)" }}>Date of birth:</h5>
                                <p>{patientsData.dob}</p>
                                <h5 style={{ color: "rgb(0, 175, 185)" }}>
                                    Clinical History:
                                </h5>
                                <p>{patientsData.clinicalHistory}</p>
                                <div id="flexContainer">
                                    <img id="caseImgUrl" alt="" src={patientsData.images} />
                                    <div id="contents" style={{ paddingTop: "20px" }}>
                                        <h5 style={{ color: "rgb(0, 175, 185)" }}>
                                            Imaging Modality:
                                        </h5>
                                        <p>{patientsData.modality}</p>
                                        <h5 style={{ color: "rgb(0, 175, 185)" }}>
                                            Published Date:
                                        </h5>
                                        <p>{patientsData.publishedDate}</p>
                                        <h5 style={{ color: "rgb(0, 175, 185)" }}>
                                            Case Discussion:
                                        </h5>
                                        <p>{patientsData.caseDiscussion}</p>
                                        <h5 style={{ color: "rgb(0, 175, 185)" }}>
                                            Radiologist ID:
                                        </h5>
                                        <p
                                            style={{ cursor: "pointer", color: "blue" }}
                                            variant="primary"
                                            onClick={this.handleShow}
                                        >
                                            {patientsData.radiologistId}
                                        </p>
                                        <Modal show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>
                                                    Radiologist-{patientsData.radiologistId}:
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div>
                                                    <p className="card-text">
                                                        <h5 style={{ color: "rgb(56, 54, 154)" }}>
                                                            Radiologist's ID:
                                                        </h5>
                                                        {this.state.radiologistId}
                                                    </p>
                                                    <p className="card-text">
                                                        <h5 style={{ color: "rgb(56, 54, 154)" }}>
                                                            Radiologist's Name:
                                                        </h5>
                                                        {this.state.radiologistName}
                                                    </p>
                                                    <p className="card-text">
                                                        <h5 style={{ color: "rgb(56, 54, 154)" }}>
                                                            Radiologist's Speciality:
                                                        </h5>
                                                        {this.state.radiologistSpeciality}
                                                    </p>
                                                    <p className="card-text">
                                                        <h5 style={{ color: "rgb(56, 54, 154)" }}>
                                                            Radiologist's Medical Institution:
                                                        </h5>
                                                        {this.state.radiologistmedicalInstitution}
                                                    </p>
                                                    <p className="card-text">
                                                        <h5 style={{ color: "rgb(56, 54, 154)" }}>
                                                            Radiologist's Email:
                                                        </h5>
                                                        {this.state.radiologistEmail}
                                                    </p>
                                                </div>
                                            </Modal.Body>

                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={this.handleClose}>
                                                    Close
                                                </Button>
                                                <Button variant="primary" onClick={this.handleClose}>
                                                    Save Changes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                        <h5 style={{ color: "rgb(0, 175, 185)" }}>Body Systems:</h5>
                                        <ul>
                                            {patientsData.bodySystems.map((i) => (
                                                <li key={i._id}>{i}</li>
                                            ))}
                                        </ul>
                                        <h5 style={{ color: "rgb(0, 175, 185)" }}>
                                            Scientific References:
                                        </h5>
                                        <h6>{patientsData.scientificReferences}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        });
    };
    // display this search bar as default until user enters search value and onclick will call
    // the active search function and display the search results
    render() {
        return (
            <React.Fragment>
                <div class="d-flex">
                    <input
                        class="form-control"
                        type="search"
                        placeholder="Search case"
                        name="search"
                        onChange={this.onChange}
                    ></input>
                    <button class="searchbtn rounded-3" onClick={this.setActiveSearch}>
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                {this.display()}
            </React.Fragment>
        );
    }
}
