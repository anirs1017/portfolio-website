import React from 'react';
import kalyani from '../assets/images/kalyani.jpg';
import david from '../assets/images/david.jpg';
import shubham from '../assets/images/shubham.jpg';

export default function Recommendation() {
    return (
        <section className="contact-section bg-black" id="recommendation">
            <div className="container-fluid">
                <h2 className="text-white text-center mb-5">Recommendations</h2>
                <div className="card-deck p-5">
                    <div className="card m-4">
                        <img className="card-img-top" src={kalyani} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">kalyani kaushik</h5>
                            <h6 className="card-text">Product Engineer at Cummins India Ltd</h6>
                            <p className="card-text">"It's not everyday that we come across a rare talent like Aniruddha. I have known Aniruddha for 7 years now and was closely associated with him during our undergraduate years at Tezpur University. Something that made Aniruddha stand out was that he never missed an opportunity to collaborate with students beyond his discipline which is infact how we became friends. We worked together as co-founders of Scripture, the first technical e-magazine of School of Engineering where he put in tremendous efforts to reach out to people across disciplines for publishing the same. Aniruddha also believes that it's important to uplift and develop the people around him which is why he spent many college weekends in organising workshops for technical skills enhancement not just for his juniors but also for children of the neighboring villages. Aniruddha also has commendable interpersonal skills and it was always a delight to learn from him. Aniruddha earns my highest recommendation; he would be an indispensable asset to any organization he works in."</p>
                        </div>
                    </div>
                    <div className="card m-4">
                        <img className="card-img-top" src={david} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">David Doermann</h5>
                            <h6 className="card-text">Professor, Empire Innovation in AI at University at Buffalo</h6>
                            <p className="card-text">"Aniruddha is a recent graduate from the MS program in CSE at UB. Independent thinker and very dedicated.

                            He continues to work with us part-time on many different projects, showing his breath and knowledge of the field. I have no problem assigning him different tasks, as I know that he can handle them.

                            Previously, Aniruddha worked with a small team of behavioral scientists to analyze text data using deep learning methods. He worked to develop the framework, implement and test the interface, and work with technicians to gather data. He explored various natural language processing tools to process acquired text and transcribed speech data and had been instrumental in guiding the team to publishable results.

                            More recently, he has been developing his skills as a web engineer and expanding his knowledge of machine learning and data science. He remains eager to learn and is very dedicated.
He is highly recommended, and I am sure that the company he ends up with will feel so as well."</p>
                        </div>
                    </div>
                    <div className="card m-4">
                        <img className="card-img-top" src={shubham} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Shubham Sharma</h5>
                            <h6 className="card-text">Engineer at Qualcomm</h6>
                            <p className="card-text">"I have very closely been associated with Aniruddha during our Undergraduate days at Tezpur University. We worked in the same team in an internship at C-DAC Pune and also as a team in the final year projects of B.Tech. We developed two prototypes in the area of the Internet of Things and Embedded Systems like Smart Home Automation for Energy Saving and A Wearable Health Monitoring and Alerting System for old and physically challenged people. While working with Aniruddha, I found him to be a very pro-active and meticulous student with a virtuous attitude towards interdisciplinary learning. His project planning and multi-tasking skills are amazing, something that I learnt from him. He possesses great interpersonal skills and is never afraid of failures, despite calculative risk taking. During our weekends in college, I saw him organizing events and conducting various workshops on technical skill development for our juniors. He has also exhibited prominent entrepreneurial and leadership skills over the course of four years in college in various capacities, like Chair of the college’s IEEE Chapter, Marketing Head of the first TEDx event at Tezpur University, Assistant Prefect of a Men’s hostel of 400 male boarders and also starting the first technical e-Magazine of the college, SCRIPTURE, where I worked as an editor with him in the first edition of this magazine.
He will be a great asset to the team he is part of and will perform his duties with complete conviction."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
