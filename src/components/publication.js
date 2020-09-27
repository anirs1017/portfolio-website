import React from 'react';
import cict from '../assets/images/CICT-paper.jpg';
import iccca from '../assets/images/ICCCA-paper.jpg';
import springer from '../assets/images/Springer-Paper.jpg';


export default function Publication() {
    return (
        <section className="contact-section bg-black" id="publication">
            <div className="container-fluid">
                <h2 className="text-white text-center mb-5">Publications</h2>
                <div className="row">
                    <div className="col-md-4 mb-2 mb-md-0">
                    <div className="img-container">
                        <div className="publication bg-light">
                            <a href="https://ieeexplore.ieee.org/document/7977309" target="_blank" rel="noopener noreferrer" >
                                
                                    <img src={cict} alt="Avatar" className="image" />
                                    <div className="overlay">

                                        <div className="text">
                                            <h4>Design of an Energy Efficient IoT enabled Smart System based on DALI network over MQTT protocol</h4>
                                            <h6>2017 3rd International Conference on Computational Intelligence & Communication Technology (CICT)</h6>
                                            <h6><i className="fas fa-calendar text-primary mu-2"></i> &nbsp; Jul 13, 2017 </h6>
                                        </div>

                                    </div>
                                
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2 mb-md-0">
                    <div className="img-container">
                        <div className="publication bg-light">
                            <a href="https://ieeexplore.ieee.org/document/8230009" target="_blank" rel="noopener noreferrer" >
                               
                                    <img src={iccca} alt="Avatar" className="image" />
                                    <div className="overlay">

                                        <div className="text">
                                            <h4>An Internet of Things based prototype for smart appliance control</h4>
                                            <h6>2017 International Conference on Computing, Communication and Automation (ICCCA)</h6>
                                            <h6><i className="fas fa-calendar text-primary mu-2"></i> &nbsp;Dec 21, 2017</h6>
                                        </div>

                                    </div>

                               
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2 mb-md-0">
                    <div className="img-container">
                        <div className="publication bg-light">
                            <a href="https://link.springer.com/article/10.1007/s12652-018-1101-z" target="_blank" rel="noopener noreferrer" >
                                
                                    <img src={springer} alt="Avatar" className="image" />
                                    <div className="overlay">

                                        <div className="text">
                                            <h4>A novel approach for IoT based wearable health monitoring and messaging system</h4>
                                            <h6>Journal of Ambient Intelligence and Humanized Computing, Springer</h6>
                                            <h6><i className="fas fa-calendar text-primary mu-2"></i> &nbsp;Nov 4, 2018</h6>
                                        </div>

                                    </div>
                                
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
