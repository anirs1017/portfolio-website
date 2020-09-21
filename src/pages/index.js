import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import profile from '../assets/images/Aniruddha_profile.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';
import Skills from '../components/Skills';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section">
      <div className="container">
        <h2 className="text-white mb-4 text-center">About me</h2>
        <div className="about-img mb-4">
        <img className="card-img img-fluid" src={profile} alt="Profile Image" />
        </div>
        <div className="card">        
          <div className="card-body">
            <p className="text-black-90 mb-0">
              I am a Software Developer with a curious mind and deep interest in the areas of Artificial Intelligence, Internet of Things, Web Development and Augmented Reality. I graduated with a Masters in Computer Science, specializing in Artificial Intelligence from the University at Buffalo (SUNY), New York in February, 2020. Currently based in Buffalo, I am actively looking to move into a Full-time Software Developer role at a product based company to augment my current technical skills.
                </p><br></br>
            <p className="text-black-90 mb-0">
              Proficient in Python and Java, I have an experience of 1.5 years, working in the domains of Full-Stack development, Cloud Solutioning, and AI for NLP and improving Multimedia Search, responsible for cross functional product development of  a Learning Management system, using MVC architecture. During my graduate days at SUNY Buffalo, I worked on a research based project in collaboration with the Department of Behavioral Medicine, UB to improve Human Behavior and Decision Making by evaluating human impulsivity using Machine Learning and NLP. With an undergraduate background in the field of Electronics and Communications Engineering, I have also worked on many IoT and Embedded Systems projects, one of which was a prototype developed for smart health monitoring of the elderly and physically challenged people. This project was also published as a Journal article in Springer in November, 2018.
                  </p><br></br>
            <p className="text-black-90 mb-0">
              I am an adaptable professional and enjoy multi-tasking. Over the course of my career, I have developed proven analytical, organizational, and research skills, which I hope to put to use in my future roles and responsibilities.
                  </p><br></br>
            <p className="text-black-90 mb-0">
              In my free time, I like to cook, drive and travel to new and unexplored places. Photography is a very dear passion to me that has always helped me in connecting with people and exploring new cultures, giving me an opportunity to learn so much from every such interaction.
              </p>
          </div>
        </div>
      </div>
    </section>
    <Skills />
    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Shoreline</h4>
              <p className="text-black-50 mb-0">
                Grayscale is open source and MIT licensed. This means you can
                use it for any project - even commercial projects! Download it,
                customize it, and publish your website!
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Misty</h4>
                  <p className="mb-0 text-white-50">
                    An example of where you can put an image of a project, or
                    anything else, along with a description.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Mountains</h4>
                  <p className="mb-0 text-white-50">
                    Another example of a project with its respective
                    description. These sections work well responsively as well,
                    try this theme on a small screen!
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <Subscribe /> */}

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
