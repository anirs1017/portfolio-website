import React from 'react';
import one from '../assets/images/1.png';
import two from '../assets/images/2.png';
import three from '../assets/images/3.png';
import four from '../assets/images/4.png';
import five from '../assets/images/5.png';
import six from '../assets/images/6.png';
import seven from '../assets/images/7.png';
import eight from '../assets/images/8.png';
import nine from '../assets/images/9.png';
import ten from '../assets/images/10.png';
import eleven from '../assets/images/11.png';
import twelve from '../assets/images/12.png';


export default function Projects() {
    return (
        <section className="contact-section bg-black" id="projects">
            <div className="container-fluid">
                <h2 className="text-center text-white mb-5">Projects</h2>
                <div className="text-center text-white m-4">
                    For more of my work, please visit my &nbsp;
                    <a href="https://github.com/aniruddhasinha10" target="_blank" rel="noopener noreferrer" >
                        GitHub Profile</a>
                </div>
                <div className="row">
                    <div className="col-md-4 p-3 ">
                        <div className="projects bg-light p-4">
                            <a className="link" href="https://github.com/aniruddhasinha10/COVID-19-Tracker-Early-2020" target="_blank" rel="noopener noreferrer" />
                            <div className="card-img-container">
                            <img className="project-img-top" src={one} alt="Card image cap" />
                        </div>
                            <h4>COVID-19 Cases Tracker, early 2020</h4>
                            <h6>Skills: Python, Pandas, OpenBlender</h6>
                            <div>
                                <ul>
                                    <li>Designed a COVID-19 Cases tracker in Python using the live open-source data from OpenBlender to visualize Confirmed Cases, Confirmed Deaths, Recovered Cases and varying prices of resources around the world in March, 2020.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 p-3 ">
                        <div className="projects bg-light p-4">
                            <a className="link" href="https://github.com/aniruddhasinha10/Maritime_Depth_Perception_Object_Detection" target="_blank" rel="noopener noreferrer" />
                            <div className="card-img-container">
                            <img className="project-img-top" src={two} alt="Card image cap" />
                        </div>
                            <h4>Maritime Vehicle System Data Analysis</h4>
                            <h6>Skills: Python, OpenCV, Keras</h6>
                            <div>
                                <ul>
                                    <li>Developed a mechanism as a solution for automated docking and navigation of maritime vessels for a Buffalo based startup, using Deep Learning and classical Computer Vision techniques with stereoscopic cameras.</li>
                                    <li>Performed object detection by customizing YOLO v3 models for maritime objects. Depth was estimated for objects at distances up to 2 miles.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3 ">
                        <div className="projects bg-light p-4">
                            <a className="link" href="https://github.com/aniruddhasinha10/Find-Most-Similar-Movies" target="_blank" rel="noopener noreferrer" />
                            <div className="card-img-container">
                            <img className="project-img-top" src={three} alt="Card image cap" />
                        </div>
                            <h4>Movie Recommendation System</h4>
                            <h6>Skills: Apache Spark, SQL, AWS EMR</h6>
                            <div>
                                <ul>
                                    <li>Generated the 15 most popular movies in the movieLens dataset of 1M moviesfrom movie ratings and used Item-based Collaborative Filtering to suggest 10 most similar movies to the user.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3 ">
                        <div className="projects bg-light p-4">
                            <a className="link" href="https://www.youtube.com/watch?v=impFMKH6EW4" target="_blank" rel="noopener noreferrer" />
                            <div className="card-img-container">
                            <img className="project-img-top" src={four} alt="Card image cap" />
                        </div>
                            <h4>An IoT based Wearable Health Monitoring and Messaging System</h4>
                            <h6>Skills: C, Arduino Nano, Google Fusion Tables, MIT App Inventor 2</h6>
                            <div>
                                <ul>
                                    <li>Developed a wearable, Bluetooth prototype over a period of 16-20 weeks to monitor the real-time basic health parameters such as heartbeat, body temperature, and body impact values of the elderly and physically challenged people.</li>
                                    <li>Built an Android app to display health parameters, calculate present health conditions, and update relatives via text message with the GPS location of thepatient.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3 ">
                        <div className="projects bg-light p-4">
                            <a className="link" href="" target="_blank" rel="noopener noreferrer" />
                            <div className="card-img-container">
                            <img className="project-img-top" src={five} alt="Card image cap" />
                        </div>
                            <h4>User Preference Analysis on a Streaming Platform</h4>
                            <h6>Skills: Python3, PyTorch, Pandas</h6>
                            <div>
                                <ul>
                                    <li>Used a Restricted Boltzmann machine to analyse video-content ratings of a user and evaluate if they will prefer to watch a similar / dissimilar content.</li>
                                    <li>Implemented a stacked Auto Encoder to verify if the recommendation system can predict accurate future ratings for an unwatched content by a user, with a predicted rating difference of less than 1 star.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3 ">
                        <div className="projects bg-light p-4">
                            <a className="link" href="https://github.com/aniruddhasinha10/U.S.Politics_Trends2019_CSE587_DIC" target="_blank" rel="noopener noreferrer" />
                            <div className="card-img-container">
                            <img className="project-img-top" src={six} alt="Card image cap" />
                        </div>
                            <h4>Big Data Analytics of US Politics, early 2019</h4>
                            <h6>Skills: R, Python, AWS(EMR & EC2), Hadoop HDFS, Tableau</h6>
                            <div>
                                <ul>
                                    <li>Cleaned and analysed scattered political data from Twitter, NY Times and Common Crawl APIs to find the then trending political topics.</li>
                                    <li>Performed word count through Map Reduce on AWS EMR and generated a word-cloud on Tableau.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3 ">
                        <div className="projects bg-light p-4">
                            <a className="link" href="https://github.com/aniruddhasinha10/U.S.Flu_Exploratory_Data_Analysis_CSE587_DIC" target="_blank" rel="noopener noreferrer" />
                            <div className="card-img-container">
                            <img className="project-img-top" src={seven} alt="Card image cap" />
                        </div>
                            <h4>U.S. Flu EDA, 2018-19 </h4>
                            <h6>Skills: R, Python, Tableau, Twitter API</h6>
                            <div>
                                <ul>
                                    <li>Collected and processed Twitter data on certain keywords related to “flu” and visualized geo spatial information extracted from the tweets in home-brewed flu map of the USA. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3 ">
                        <div className="projects bg-light p-4">
                            <a className="link" href="https://github.com/aniruddhasinha10/ImageQuantization_KMeans__ImageStitching" target="_blank" rel="noopener noreferrer" />
                            <div className="card-img-container">
                            <img className="project-img-top" src={eight} alt="Card image cap" />
                        </div>
                            <h4>Image Quantization and Keypoint Detection using SIFT</h4>
                            <h6>Skills: Python, OpenCV</h6>
                            <div>
                                <ul>
                                    <li>Worked on digital image quantization using K-Means and Gaussian Mixture Models in digital color images.</li>
                                    <li>Key contributions included implementing a 2D-Scale Invariant Feature Transform to detect keypoints in digital images. Also performed noise removal and point detection in digital images using image morphology.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3 ">
                        <div className="projects bg-light p-4">
                            <a className="link" href="https://github.com/aniruddhasinha10/ROS_GridLocalization_BayesFilter_CSE568" target="_blank" rel="noopener noreferrer" />
                            <div className="card-img-container">
                            <img className="project-img-top" src={nine} alt="Card image cap" />
                        </div>
                            <h4>Localization and Global Planning of Robots</h4>
                            <h6>Skills: Python, ROS </h6>
                            <div>
                                <ul>
                                    <li>Automated a bot’s motion by performing Grid Localization – a variant of discrete Bayes Localization as a prototype for motion in the real world and implemented A-Star algorithm for global path planning.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3 ">
                        <div className="projects bg-light p-4">
                            <a className="link" href="https://github.com/aniruddhasinha10/Reinforcement-Learning---Tom-n-Jerry" target="_blank" rel="noopener noreferrer" />
                            <div className="card-img-container">
                            <img className="project-img-top" src={ten} alt="Card image cap" />
                        </div>
                            <h4>Agent Navigation using Reinforcement Learning</h4>
                            <h6>Skills: Python, Scikit Learns, Keras</h6>
                            <div>
                                <ul>
                                    <li>Designed a deep Q-learning algorithm to teach an agent, Tom to catch Jerry, the goal, in the least number of steps in a Tom-and-Jerry chase game, in the background of reinforcement learning.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3 ">
                        <div className="projects bg-light p-4">
                            <a className="link" href="" target="_blank" rel="noopener noreferrer" />
                            
                            <div className="card-img-container">
                            <img className="project-img-top" src={eleven} alt="Card image cap" />
                        </div><h4>Classifying Customer Behavior using Machine Learning</h4>
                            <h6>Skills: R</h6>
                            <div>
                                <ul>
                                    <li>Implemented Support Vector Machines, Decision Trees, Naive Bayes and Random Forest Classifier Models to classify customer behavior in a Social Network Ad dataset and predict the prospective buyers of the product advertised. Tuned the hyper-parameters using Grid Search and accuracies achieved wereS VM - 94%, Decision Trees - 92%, Naive Bayes - 90%, Random Forest Classier- 92%.</li>
                                    <li>Also tuned the Decision Tree Classier with XGBoost to achieve accuracy of 96%.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3 ">
                        <div className="projects bg-light p-4">
                            <a className="link" href="https://www.youtube.com/watch?v=KsNNaFW1YeA" target="_blank" rel="noopener noreferrer" />
                            <div className="card-img-container">
                            <img className="project-img-top" src={twelve} alt="Card image cap" />
                        </div>
                            <h4>Smart Appliance Control with IoT</h4>
                            <h6>Skills: C, Linux, Raspberry Pi, MQTT Paho, nodeMCU, Humidity & Motion Sensors</h6>
                            <div>
                                <ul>
                                    <li>Designed a smart prototype on Home Automation to smartly take requisite actions based on changes in humidity or temperature at a remote location.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
