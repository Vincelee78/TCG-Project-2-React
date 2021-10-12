import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


export default class CarouselComponent extends React.Component {
    state = {
        'active': 'Carousel',
        
    }
    
    render() {
        return (
            <React.Fragment>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.carestream.com/blog/wp-content/uploads/2020/01/future_of_diag_imaging_fb_1_2020_en.jpg"
                            alt="First slide" style={{ width: '100%', height: '600px', backgroundSize: 'cover' }}
                        />
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://d1hj7uubji8r0c.cloudfront.net/sites/radiology/files/styles/max_width_full/public/images/2020-02/pcir_cover_photos_hi_res_resize.jpg?itok=VHDBxu-X"
                            alt="Second slide" style={{ width: '100%', height: '600px', backgroundSize: 'cover' }}
                        />

                        <Carousel.Caption>
                            {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.elsevier.com/__data/assets/image/0012/1022133/Radiology-at-a-Crossroads_Five-converging-trends-reshaping-the-need-for-diagnostic-decision-support.JPG"
                            alt="Third slide" style={{ width: '100%', height: '600px', backgroundSize: 'cover' }}
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </React.Fragment>
        );
    }
}