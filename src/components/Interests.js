import React from 'react';
import code from '../assets/images/code.jpg';
import cook from '../assets/images/cook.jpg';
import travel from '../assets/images/travel.jpg';
import photography from '../assets/images/photography.jpg';



export default function Interests() {
    return (
        <section className="contact-section bg-black" id="interests">
            <div className=" text-center container-fluid">
                <h2 className="text-white text-center mb-5">Stuff I Do</h2>
                <div className="row">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <div className="interests bg-light">
                            <div className="img-container">
                                <img src={code} alt="Avatar" className="image" />
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
                        <div className="interests bg-light">
                            <div className="img-container">
                                <img src={travel} alt="Avatar" className="image" />
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
                        <div className="interests bg-light">
                            <div className="img-container">
                                <img src={cook} alt="Avatar" className="image" />
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
                        <div className="interests bg-light">
                            <div className="img-container">
                                <img src={photography} alt="Avatar" className="image" />
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
