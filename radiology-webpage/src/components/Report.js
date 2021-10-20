import React from 'react';



export default class Report extends React.Component {
    state = {
        'active': 'Reports',


    }


    render() {
        return (
            <React.Fragment>
                <div class="container-lg my-4">
                    <div class="p-5 mb-4 bg-dark text-white rounded-3">
                        <h1>Introduction to Reports</h1>
                        <p class="lead">Reports are a collaborative effort to provide a single canonical page on all topics relevant to the practice of radiology. As such, articles are written and edited by countless contributing members over a period of time. A group of dedicated editors oversee accuracy, consulting with expert advisers, and constantly reviewing additions.<a href="https://www.tutorialrepublic.com" target="_blank" class="text-white">tutorialrepublic.com</a> </p>
                        <p><a href="https://www.tutorialrepublic.com" target="_blank" class="btn btn-primary btn-lg">Create New Report</a></p>
                    </div>
                    <div class='text-dark'>
                    <h3 style={{color:'darkblue'}}>3D Printing used in medicine</h3>
                    <p><strong>3D printing</strong>, a term often used synonymously with additive manufacturing, is a process of creating objects from three-dimensional digital information. In most cases, 3D printing is, in fact, additive manufacturing, a process in which objects are built by adding material layer by layer. This process has several advantages over traditional manufacturing methods such as injection moulding or subtractive manufacturing relevant to medicine and surgery including the possibility of making uniquely customised objects for patients, rapidly prototyping objects, and often easier creation of complex and/or hollow objects.</p>

                    <p>3D printing has been used in anatomical models for surgical planning, surgical tools, splints, implantable medical devices, prostheses, and even pharmaceutical drugs. 3D printed objects have some distinct features even compared to three-dimensional virtual reconstructions in terms of surgical planning 4, allowing surgeons to not only see but touch models (created based on the specific patient's imaging studies), of the areas on which they plan to operate. </p>

                    <p>3D printing models of surgical pathology, in particular patients, generally requires making tessellated mesh files, such as an STL file, from a patient's DICOM files of CTs and/or MRIs. After performing appropriate segmentation in DICOM files, a radiologist will often work with a surgeon to understand how to best print (or simply model in 3D without printing) for a particular pathology.</p>

                    <p>4D printing is an emerging technology that can be conceptualized as 3D printing that produces objects that change over time or under certain conditions.</p>
                    </div>
                    <h3 style={{color:'darkblue'}}>Practical Points</h3>
                    <ul>
                    <li>segmentation of organs and/or regions of interest are usually done automatically or semi-automatically via computer algorithm</li>
                    <li>segmentation can be altered or even done entirely manually</li>
                    <li>prints can include water-soluble material which can be washed away</li>
                    <li>printing difficult geometries are often facilitated by printing some structures to be removed or washed away from the final print</li>
                    <li>knowledge of how materials are affected by sterilisation is necessary when printing surgical guides or other materials for the actual surgery</li>
                    <li>moulage models can be made by printing air around structures as the mould</li>
                    </ul>
                </div>
            </React.Fragment>
        )

    }

}

