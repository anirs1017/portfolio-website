import React from 'react';
import Layout from '../components/Layout';
import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import demoImage1 from '../assets/images/Leadership.jpg';
import demoImage2 from '../assets/images/Volunteering.jpg';
import profile from '../assets/images/about-me2.jpg';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Publication from '../components/publication';
import Recommendation from '../components/Recommendation';
import Interests from '../components/Interests';

const IndexPage = () => (
  <Layout>
    <Header />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 mb-4 text-uppercase">{config.heading}</h1>
          <h2 className="text-white mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <div className="social mb-5 d-flex justify-content-center">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url} className={`mx-2`} target="_blank">
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
          <div>
            <a href="https://drive.google.com/file/d/1FVmjo5xYdlQaeAt-buu23OvaUH20YhN9/view?usp=sharing" className="btn btn-primary" target="_blank">
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <hr />
    </header> 
    <section id="about" className="about-section bg-black">
      <div className="container-fluid bg-black">
        <h2 className="text-white mb-4 text-center">About me</h2>
        <div className="card bg-black ">
          <div className="row no-gutters mb-5 bg-black">
            <div className="col-md-4 py-4">
              <img src={profile} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="text-white-50 mb-0">Hello!</h4>
                <p className="text-white-50 mb-2">
                  I am a Software Developer with a curious mind and deep interest in the areas of Artificial Intelligence, Internet of Things, Web Development and Augmented Reality. I graduated with a Masters in Computer Science, specializing in Artificial Intelligence from the University at Buffalo (SUNY), New York in February, 2020. Based in Buffalo, I am actively looking to move into a Full-time Software Developer role at a product based company to augment my current technical skills.
                </p>
                <p className="text-white-50 mb-2">
                  As an avid Python programmer, I enjoy working on Data Engineering, Data Science and Machine Learning problems. Currently, I am working on a project with the Dept. of Behavioral Medicine, University at Buffalo by leveraging Machine Learning and Data Engineering to study Human Behavior Analysis and Modification, using the rules of Behavioral Sciences.
                  </p>
                <p className="text-white-50 mb-2">
                  I am an adaptable professional and enjoy multi-tasking. I also love to teach. Over the course of my career, I have developed proven analytical, organizational, and research skills, which I hope to put to use in my future roles and responsibilities.
                  </p>
                <p className="text-white-50 mb-2">
                  In my free time, I like to cook, drive and travel to new and unexplored places. Photography is a very dear passion to me that has always helped me in connecting with people and exploring new cultures, giving me an opportunity to learn so much from every such interaction.
              </p>
                <div className="container mb-5">
                  <div className="row mb-2">
                    <div className="col-3 text-white-50">Name :</div>
                    <div className="col-9 text-white-50">{config.heading}</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-3 text-white-50">Email :</div>
                    <div className="col-9 text-white-50">{config.email}</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-3 text-white-50">Phone :</div>
                    <div className="col-9 text-white-50">{config.phone}</div>
                  </div>
                </div>
                <h3 className="text-white-50 mx-auto mt-2 mb-5">1.6+ years of Work Experience</h3>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </section> 
    <Skills />
    <Experience /> 
    <Projects /> 
    <Publication />
    <section id="leadership" className="projects-section bg-black">
      <div className="container-fluid">
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                <h2 className="text-center text-white mb-5">Leadership</h2>
                  <p className="mb-3 text-white-100">
                  <a className="" href="https://ieeetu.herokuapp.com/#/" target="_blank" rel="noopener noreferrer" >
                  <div>
                    <h5> Chairperson, IEEE Student Branch Tezpur University</h5>   
                    <ul>
                      <li> Looked after the Chapter's management, conducted technical workshops for junior students and organized seminars with esteemed speakers from the industry.</li>
                    </ul>
                    </div>                  
                    </a>
                  </p>              
                  <p className="mb-3 text-white-100">
                  <a className="" href="https://www.ted.com/tedx/events/19694" target="_blank" rel="noopener noreferrer" >
                    <h5> Marketing Event Coordinator, TEDx Tezpur University, TEDx</h5>
                    </a>
                  </p>
                  <p className="mb-3 text-white-100">
                  <a className="" href="https://drive.google.com/file/d/1VebNcirOsP6cRzeoSVXiz0w4q1HvRBAa/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                   <div>
                     <h5>
                    Co-Founder, SCRIPTURE, Tezpur University
                     </h5>
                    <ul>
                      <li>Started our college’s first technical e-magazine, SCRIPTURE and led a team of three designers for its design in the first two editions</li>
                    </ul>
                    </div>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid leadership-img" src={demoImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                <h2 className="text-center text-white mb-5">Volunteering</h2>
                  <p className="mb-3 text-white-100">
                  <a className="" href="https://www.linkedin.com/company/american-red-cross/" target="_blank" rel="noopener noreferrer" >
                  <div>
                    <h5>Community Volunteer, American Red Cross</h5>             
                    <ul>
                      <li>Working in the BioMed Scheduling team to encourage the community for Blood Donation Drives and also expand Red Cross Volunteer base in the region.</li>
                    </ul>
                    </div>              
                    </a>
                  </p>
                  <p className="mb-3 text-white-100">
                  <a className="" href="https://www.linkedin.com/company/manning-publications-co/" target="_blank" rel="noopener noreferrer" >
                   <h5>Project Implementation Specialist, Manning Publications Co.</h5> 
                    </a>
                  </p>
                  <p className="mb-3 text-white-100">
                  <a className="" href="https://www.linkedin.com/company/national-service-scheme/" target="_blank" rel="noopener noreferrer" >
                  <div>
                    <h5>
                  Co Organizer, National Service Scheme
                    </h5>
                    <ul>
                      <li>Co-organized a Blood Donation Drive on campus inviting the Tezpur University fraternity to donate blood for a social cause.</li>
                    </ul>
                    </div>                   
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>  
    {/* <Subscribe /> */}
    <Interests />  
    <Recommendation />   
    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
