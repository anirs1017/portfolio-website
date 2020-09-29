import React from 'react';


export default function Experience() {
    return (
        <section className="contact-section bg-black" id="experience">
            <div className="container">
                <h2 className="text-center text-white mb-5">Work Experience</h2>
                <div className="row">
                    <div className="col-12 mb-5 bg-light">
                        <div className="experience m-4">
                            <a className="link" href="https://www.buffalo.edu/ai/research/laboratories-and-groups/innovation-lab/research/LEARM.html" target="_blank" rel="noopener noreferrer" />
                            <h4>Research Programmer</h4>
                            <h6>Dept.  of Computer Science, UB</h6>
                            <h6>Jun’19 - Present</h6>
                            <div className="description">
                                <ul>
                                    <li>Worked on a project for Human Behavior Analysis and Modification using three channels - human text entry, human speech and human facial micro-expressions in the background of Episodic Future Training (EFT) of Behavioral Medicine.</li>
                                    <li>Developed and deployed scripts for Data Engineering, Statistical Analysis and visualization of the text, audio and video data achieved from the studies.  Produced happiness scores on all three channels through NLP and a Deep Learning model trained on the relevant features to study correlation between micro-expressions and reducing impulsive decision making.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-5 bg-light">
                        <div className="experience m-4">
                            <a className="link" href="https://www.buffalo.edu/ai/research/laboratories-and-groups/innovation-lab/research/Document-and-Figure-Linking.html" target="_blank" rel="noopener noreferrer" />
                            <h4>Graduate Research Assistant</h4>
                            <h6>Artificial Intelligence Innovation Laboratory (A2IL), UB</h6>
                            <h6>Jan’19 - Jan’20</h6>
                            <div className="description">
                                <ul>
                                    <li>Devised and executed a pipeline for a project aimed at Ground Truth Generation from Biomedical Text Archives for training Machine Learning models.</li>
                                    <li>Built an XML parser from scratch for over a million National Institute of Health’s (NIH) Pub Med Central text archives using Beautiful Soup 4 and Python3.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-5 bg-light">
                        <div className="experience m-4">
                            <a className="link" href="https://www.linkedin.com/company/stratbeans-consulting/" target="_blank" rel="noopener noreferrer" />
                            <h4>Software Engineer</h4>
                            <h6>Stratbeans Consulting Pvt.  Ltd., India</h6>
                            <h6>Jun’17 - Jul’18</h6>
                            <div className="description">
                                <ul>
                                    <li>Worked on full-stack development, responsible for cross-functional product development of a Learning Management System,using MVC architecture.</li>
                                    <li>Assisted Cloud Solutions and deployment of Web Applications for scale.</li>
                                    <li>Used my domain knowledge of AI and Machine Learning in Multimedia (Video, Audio, Text) search solutions to give faster access of documents and videos to corporate customers.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-5 bg-light">
                        <div className="experience m-4">
                            <a className="link" href="https://www.linkedin.com/company/stratbeans-consulting/" target="_blank" rel="noopener noreferrer" />
                            <h4>Software Engineer Intern</h4>
                            <h6>Stratbeans Consulting Pvt.  Ltd., India</h6>
                            <h6>Jan’17 - Jun’17</h6>
                            <div className="description">
                                <ul>
                                    <li>Developed a chatbot to ease the process of finding similar corporate legacy documents by using ElasticSearch.</li>
                                    <li>Improved quality of the result of the chatbot over time.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
