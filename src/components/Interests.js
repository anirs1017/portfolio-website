import React from 'react';
import cict from '../assets/images/CICT-paper.jpg';
import iccca from '../assets/images/ICCCA-paper.jpg';
import springer from '../assets/images/Springer-Paper.jpg';


export default function Interests() {
    return (
        <section className="contact-section bg-black" id="interests">
            <div className=" text-center container-fluid">
                <h2 className="text-white text-center mb-5">Stuff I Do</h2>
                <div className="row">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <div className="projects bg-light">
                            <div className="img-container">
                                <img src={cict} alt="Avatar" className="image" />
                                <div className="overlay">
                                    <a className="link" href="" target="_blank" rel="noopener noreferrer" >
                                        <div className="interest-text">
                                            <h4>Code</h4>
                                           
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 mb-md-0">
                        <div className="projects bg-light">
                            <div className="img-container">
                                <img src={cict} alt="Avatar" className="image" />
                                <div className="overlay">
                                    <a className="link" href="" target="_blank" rel="noopener noreferrer" >
                                        <div className="interest-text">
                                            <h4>Travel</h4>
                                            
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 mb-md-0">
                        <div className="projects bg-light">
                            <div className="img-container">
                                <img src={cict} alt="Avatar" className="image" />
                                <div className="overlay">
                                    <a className="link" href="" target="_blank" rel="noopener noreferrer" >
                                        <div className="interest-text">
                                            <h4>Cooking</h4>
                                            
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 mb-md-0">
                        <div className="projects bg-light">
                            <div className="img-container">
                                <img src={cict} alt="Avatar" className="image" />
                                <div className="overlay">
                                    <a className="link" href="" target="_blank" rel="noopener noreferrer" >
                                        <div className="interest-text">
                                            <h4>Photography</h4>
                                            
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
