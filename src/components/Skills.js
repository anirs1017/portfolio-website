import React from 'react';

export default function Skills() {
    return (
        <section className="contact-section bg-black" id="skills">
            <div className="text-center container-fluid">
                <h2 className="text-white mb-5">My Skills</h2>
                <div className="row">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <div className="card py-4 h-100">
                            <h5 className="card-title">Web Tech</h5>
                            <ul className="list-group">
                                <li className="list-group-item">HTML5 </li>
                                <li className="list-group-item">CSS3</li>
                                <li className="list-group-item">Javascript</li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 mb-2 mb-md-0">
                        <div className="card py-4 h-100">
                            <h5 className="card-title">Languages</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Python </li>
                                <li className="list-group-item">Java</li>
                                <li className="list-group-item">SQL</li>
                                <li className="list-group-item">R</li>
                                <li className="list-group-item">C</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2 mb-md-0">
                        <div className="card py-4 h-100">
                            <h5 className="card-title">Frameworks</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Beautiful Soup 4</li>
                                <li className="list-group-item">Scikit-Learn</li>
                                <li className="list-group-item">NLTK</li>
                                <li className="list-group-item">TensorFlow</li>
                                <li className="list-group-item">Keras</li>
                                <li className="list-group-item">Google BERT</li>
                                <li className="list-group-item">OpenNLP</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 mb-2 mb-md-0">
                        <div className="card py-4 h-100">
                            <h5 className="card-title">Tools</h5>
                            <ul className="list-group">
                                <li className="list-group-item">AWS</li>
                                <li className="list-group-item">Docker</li>
                                <li className="list-group-item">GIT</li>
                                <li className="list-group-item">Apache Spark</li>
                                <li className="list-group-item">Apache Hadoop</li>
                                <li className="list-group-item">MySQL</li>
                                <li className="list-group-item">noSQL</li>
                                <li className="list-group-item">Tableau</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
