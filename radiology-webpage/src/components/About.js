import React from 'react';
import usyd from '../images/usyd.png';
import work from '../images/radiologywork.jpg';
import spouse from '../images/changi.jpg';
import project from '../images/siemens-project.jpg';
import kneeimplant from '../images/3d-knee-simulation.jpg';
import spinalimplant from '../images/3d-spinal-implant.jpg';






export default class About extends React.Component {


    render() {
        return (

            <React.Fragment>
                <div class="containerAbout">
                    <div class="mx-4 p-4 rounded-3 about">
                        <h2 class="display-4" style={{ color: 'gold' }}>What is MedRadiology?</h2>
                        <h4 class=" my-4" style={{ color: 'gold' }}><b>MedRadiology’s mission</b> is to create the best radiology reference the world has ever seen and to make it available <b>for free, for ever, for all.</b></h4>
                        <hr class="my-4" />
                        <div class='footer' style={{ color: 'wheat' }}>
                            <h5>MedRadiology is an open-edit educational radiology resource that has been primarily compiled by radiologists and radiology trainees from across the world. Our mission is to create the best radiology reference, and to make it available for free, forever.</h5>
                            <h5>My wish is it to become one of the most important medical resources for millions of individuals from around the world, particularly those from low and middle-income regions who do not have access to traditional pay-wall resources. </h5>
                            <a class="btn btn-primary btn-lg mt-3" href="#" role="button">Find out more</a>
                        </div>
                    </div>
                </div>

                <div class="containerAbout">
                    <div class="m-4 pt-4 px-4 rounded-3">
                        <h4 class="display-6" style={{ color: 'gold' }}>Cases</h4>
                        <h4 class=" my-4" style={{ color: 'wheat' }}>By sharing our collective experience through interesting patient cases, we can make a real difference in how people are imaged and diagnosed. Each case belongs to a contributing member, which can then be viewed and added to articles or playlists by the community, and is guided by an editor to match quality standards and privacy needs.</h4>
                    </div>
                </div>

                <div class='background'>
                    <h4 class=" mx-5 display-6" style={{ color: 'gold' }}>Background</h4>
                    <h4 class=" mx-5 pt-2" style={{ color: 'wheat' }}>I have worked in healthcare in the past couple of years in Australia after my studies there. I spent 13 years in Australia since finishing my final year of high school there. My background is in radiography and medicine. I also have some experience in 3D printing in Siemens Singapore after coming back recently.
                        I am now in the midst of a mid-career transition to information technology.
                    </h4>
                    <div className='images p-4 d-flex justify-content-around'>
                    <img src={usyd}/>
                    <img src={spouse}/>
                    </div>
                    <div className='images p-4 d-flex justify-content-around'>
                    <img src={work}/>
                    <img src={project}/>
                    </div>
                    <div className='images p-4 d-flex justify-content-around'>
                    <img src={kneeimplant}/>
                    <img src={spinalimplant}/>
                    </div>

                </div>

                <div class='footer'>
                <div class='background'>
                    <h4 class=" mx-5 display-6" style={{ color: 'gold' }}>Support MedRadiology</h4>
                    <h4 class=" mx-5 pt-2" style={{ color: 'wheat' }}>A Radiopaedia.org Supporter is someone who values what we are trying to accomplish, and is willing to help with small periodic financial contributions to help build: </h4>
                        <ul class=" mx-5 pt-2" style={{ color: 'wheat' }}>
                            <li>innovative educational features</li>
                            <li>enhanced medical information in the radiology reference section</li>
                            <li>enhanced teaching facilities such as new presentation and quiz features</li>
                            <li>continuous improvement of the website</li>
                            <li>accessibility of radiology information to medical professionals in developing countries</li>
                        </ul>

                    <h5 class=" mx-5 pb-4 pt-2" style={{ color: 'wheat' }}>If you believe in MedRadiology's mission to create the best possible radiology reference and teaching site and make it available to everyone, forever, for free, then please consider becoming a supporter.</h5>
                </div>
                </div>
            </React.Fragment>)
    }





}