import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import RibbonText from './components/RibbonText'
import profilePic from '/profile1.jpeg';
import memePic from '/glup.jpeg';

function App() {

  return (
    <>
      {/* <NavBar /> */}
      <section className='landing'>
        <div className="welcome-sign">
          <h1>hi there...</h1>
          <h3>welcome to my <span>(unfinished)</span> whimsy portfolio</h3>
          {/* <div className="font">
            <p className="twinkle">Twinkle Star</p>
            <p className="yuyu">Yuyu</p>
            <p className="butter">Butterfly Kids</p>
            <p className="elsi">Elsie</p>
          </div> */}
        </div>
      </section>
      <RibbonText title='about me' symbol='@' />
      <section className="about">
          <h1 className='title'>get to know me!</h1>
          <div className="container">
            <img className='item' src={profilePic} alt="" />
            <div className="item content">
              <p>Informatics graduate from Mulawarman University with hands-on experience in software development, machine learning, and AI integration through internships, teaching assistantship, and academic projects. Proficient in Laravel, JavaScript, Python, React, REST API development, SQL, and data analysis using Microsoft Excel. Proven track record delivering AI-powered applications, web-based Augmented Reality solutions, and data-driven systems from requirements analysis through deployment. Strong problem-solving, communication, and cross-functional collaboration skills, seeking a Software Developer / AI Engineer role to deliver reliable, scalable solutions.</p>
              <div className="skills">
                <p className='skill-title'>Core Skills</p>
                <div className="skill-container">
                  <div className="skill-sect">
                    <p className="skill-sect-title">Software Development</p>
                    <span>Laravel</span>
                    <span>JavaScript</span>
                    <span>React.js</span>
                  </div>
                  <div className="skill-sect">
                    <p className="skill-sect-title">Data Administration</p>
                    <span>Microsoft Excel</span>
                  </div>
                  <div className="skill-sect">
                    <p className="skill-sect-title">Software Development</p>
                    <span>Laravel</span>
                    <span>JavaScript</span>
                    <span>React.js</span>
                  </div>
                  <div className="skill-sect">
                    <p className="skill-sect-title">Software Development</p>
                    <span>Laravel</span>
                    <span>JavaScript</span>
                    <span>React.js</span>
                  </div>
                </div>
                </div>
              <button>Download CV ATS</button>
            </div>
            <div className="item creds">
              <div className="creds-title">Credentials</div>
              <div className="creds-content">
                <div className="cred">
                  <div className="cred-title">
                    Briton's TOEFL Institutional
                  </div>
                  <div className="cred-desc">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <div className="cred-score">520</div>
                  <div className="cred-link">
                    <a href="#">cred</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <RibbonText title='projects' symbol='#' theme='violet' />
      <section className="projects">
        <div className="title">a few things i've built so far. ✦</div>
        <div className="container">
          <div className="card">
            <div className="card-img">
              <img src={memePic} alt="" />
            </div>
            <div className="card-content">
              <div className="card-category">
                <ul>
                  <li>Web</li>
                  <li>3D Object</li>
                </ul>
              </div>
              <div className="card-title">lorem ipsum dolor sit amet</div>
              <div className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi at aspernatur incidunt deserunt unde, beatae alias similique officia aperiam ipsum in dicta. Vel earum aspernatur quos dolore. Facilis, cum.</div>
              <div className="card-tools">
                <ul>
                  <li>MindAR</li>
                  <li>Blender</li>
                  <li>Three.js</li>
                </ul>
              </div>
              <div className="card-links">
                <a href="">Github ➜</a>
                <a href="">App ➜</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={memePic} alt="" />
            </div>
            <div className="card-content">
              <div className="card-category">
                <ul>
                  <li>Web</li>
                  <li>3D Object</li>
                </ul>
              </div>
              <div className="card-title">lorem ipsum dolor sit amet</div>
              <div className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi at aspernatur incidunt deserunt unde, beatae alias similique officia aperiam ipsum in dicta. Vel earum aspernatur quos dolore. Facilis, cum.</div>
              <div className="card-tools">
                <ul>
                  <li>MindAR</li>
                  <li>Blender</li>
                  <li>Three.js</li>
                </ul>
              </div>
              <div className="card-links">
                <a href="">Github</a>
                <a href="">App</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={memePic} alt="" />
            </div>
            <div className="card-content">
              <div className="card-category">
                <ul>
                  <li>Web</li>
                  <li>3D Object</li>
                </ul>
              </div>
              <div className="card-title">lorem ipsum dolor sit amet</div>
              <div className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi at aspernatur incidunt deserunt unde, beatae alias similique officia aperiam ipsum in dicta. Vel earum aspernatur quos dolore. Facilis, cum.</div>
              <div className="card-tools">
                <ul>
                  <li>MindAR</li>
                  <li>Blender</li>
                  <li>Three.js</li>
                </ul>
              </div>
              <div className="card-links">
                <a href="">Github</a>
                <a href="">App</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={memePic} alt="" />
            </div>
            <div className="card-content">
              <div className="card-category">
                <ul>
                  <li>Web</li>
                  <li>3D Object</li>
                </ul>
              </div>
              <div className="card-title">lorem ipsum dolor sit amet</div>
              <div className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi at aspernatur incidunt deserunt unde, beatae alias similique officia aperiam ipsum in dicta. Vel earum aspernatur quos dolore. Facilis, cum.</div>
              <div className="card-tools">
                <ul>
                  <li>MindAR</li>
                  <li>Blender</li>
                  <li>Three.js</li>
                </ul>
              </div>
              <div className="card-links">
                <a href="">Github</a>
                <a href="">App</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RibbonText title='experiences' symbol='★' />
      <section className="experience">
        <div className="title">experiences i've had.</div>
      </section>
      <RibbonText title='contact' symbol='✦' theme='violet' />
      <section className="contact">
        <div className="container">
          <div className="title">
            get in touch.
          </div>
          <div className="contact-links">
            <a href="">✦ @rizkasmita</a>
            <a href="">✦ rizkaasmita</a>
            <a href="">✦ catnooire</a>
          </div>
        </div>
      </section>
      <footer>
        crafted with whimsy. ✦ <u>rizkasmita</u>
      </footer>
    </>
  )
}

export default App
