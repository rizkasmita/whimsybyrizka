import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import RibbonText from './components/RibbonText'
import profilePic from '/profile1.jpeg';
import memePic from '/glup.jpeg';
import project1 from '/project1.png';
import project2 from '/project2.png';
import project3 from '/project3.png';
import project4 from '/project4.png';
import project5 from '/project5.png';

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
                    <div className="skill-sect-content">
                      <span>Laravel</span>
                      <span>JavaScript</span>
                      <span>React.js</span>
                      <span>Flutter</span>
                    </div>
                  </div>
                  <div className="skill-sect">
                    <p className="skill-sect-title">Data Administration</p>
                    <div className="skill-sect-content">
                      <span>Microsoft Excel</span>
                      <span>Microsoft Word</span>
                      <span>Microsoft PowerPoint</span>
                      <span>Google Workspace</span>
                    </div>
                  </div>
                  <div className="skill-sect">
                    <p className="skill-sect-title">AI/ML Engineering</p>
                    <div className="skill-sect-content">
                      <span>LLM API Integration</span>
                      <span>CNN</span>
                      <span>SVM</span>
                      <span>Random Forest</span>
                      <span>Fuzzy Logic</span>
                    </div>
                  </div>
                  <div className="skill-sect">
                    <p className="skill-sect-title">Augmented Reality/3D Modelling</p>
                    <div className="skill-sect-content">
                      <span>Blender</span>
                      <span>Three.js</span>
                      <span>Unity</span>
                      <span>A-Frame</span>
                      <span>MindAR</span>
                    </div>
                  </div>
                </div>
                </div>
              <a href="/files/CV Rizka Asmita.pdf" download="CV Rizka Asmita.pdf">
                <button>Download CV ATS</button>
              </a>
            </div>
            <div className="item creds">
              <div className="creds-title">Credentials</div>
              <div className="creds-content">
                <div className="cred">
                  <div className="cred-icon">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div className="cred-content">
                    <div className="cred-title">
                      Kaltim Tuntas Scholarship Awardee
                    </div>
                    <div className="cred-desc">
                      Achieved by maintaining GPA above 3.8
                    </div>
                    <div className="cred-score">2023-2026</div>
                    {/* <div className="cred-link">
                      <a href="#"></a>
                    </div> */}
                  </div>
                </div>
                <div className="cred">
                  <div className="cred-icon"><i class="fa-regular fa-file-lines"></i></div>
                  <div className="cred-content">
                    <div className="cred-title">
                      TOEFL Prediction Test 520
                    </div>
                    <div className="cred-desc">
                      Briton's TOEFL Institutional
                    </div>
                    <div className="cred-score">May 2026</div>
                    <div className="cred-link">
                      <a href="#">View Certificate <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                </div>
                <div className="cred">
                  <div className="cred-icon"><i class="fa-regular fa-file-lines"></i></div>
                  <div className="cred-content">
                    <div className="cred-title">
                      TOEFL Equivalent Test 523
                    </div>
                    <div className="cred-desc">
                      UPA Bahasa Universitas Mulawarman
                    </div>
                    <div className="cred-score">April 2026</div>
                    <div className="cred-link">
                      <a href="#">View Certificate <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                </div>
                <div className="cred">
                  <div className="cred-icon">
                    <i class="fa-solid fa-certificate"></i>
                  </div>
                  <div className="cred-content">
                    <div className="cred-title">
                      Certificate of Completion
                    </div>
                    <div className="cred-desc">
                      Asah led by Dicoding
                    </div>
                    <div className="cred-score">Aug 2025 - Jan 2026</div>
                    <div className="cred-link">
                      <a href="#">View Certificate <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="creds-footer">
                <p>you can find more of my credentials on <a href="https://www.linkedin.com/in/rizkaasmita" target='_blank'>my linkedin</a> page.</p>
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
              <img src={project1} alt="" />
            </div>
            <div className="card-content">
              <div className="card-category">
                <ul>
                  <li>Web</li>
                  <li>AR</li>
                  <li>Undergraduate Thesis</li>
                </ul>
              </div>
              <div className="card-title">web-based markerless AR virtual try-on for glasses</div>
              <div className="card-desc">A web-based markerless AR application for virtual glasses try-on, featuring real-time face tracking and custom 3D glasses assets optimized for the web.</div>
              <div className="card-tools">
                <ul>
                  <li>MindAR</li>
                  <li>Blender</li>
                  <li>JavaScript</li>
                  <li>Three.js</li>
                  <li>A-Frame</li>
                </ul>
              </div>
              <div className="card-links">
                <a href="https://github.com/rizkasmita/toko-kacamantan" target='_blank'>Github <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a href="https://toko-kacamantan.vercel.app" target='_blank'>App <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={project2} alt="" />
            </div>
            <div className="card-content">
              <div className="card-category">
                <ul>
                  <li>Web</li>
                  <li>Gen AI</li>
                  <li>Capstone Project</li>
                </ul>
              </div>
              <div className="card-title">Learncheck! Formative Assessment with AI</div>
              <div className="card-desc">Developed an Express.js REST API with LLM integration to generate questions from learning materials through the <b>Asah led by Dicoding</b>. Applied prompt engineering and JSON parsing for structured outputs.</div>
              <div className="card-tools">
                <ul>
                  <li>React.js</li>
                  <li>Express.js</li>
                  <li>Gemini AI API</li>
                </ul>
              </div>
              <div className="card-links">
                <a href="https://github.com/LearncheckAI/Learncheck" target='_blank'>Github <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a href="https://canva.link/sp3w468bv3g61zq" target='_blank'>Deck <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={project3} alt="" />
            </div>
            <div className="card-content">
              <div className="card-category">
                <ul>
                  <li>AI/ML</li>
                  <li>Publication</li>
                </ul>
              </div>
              <div className="card-title">Rainfall Intensity Classification Using the Mamdani Fuzzy Method</div>
              <div className="card-desc">Classified rainfall intensity using the Mamdani Fuzzy Logic method, including data preprocessing, fuzzy rule design, and model evaluation.</div>
              <div className="card-tools">
                <ul>
                  <li>Python</li>
                  <li>Fuzzy Mamdani</li>
                </ul>
              </div>
              <div className="card-links">
                <a href="https://doi.org/10.56357/jt.v21i1.422" target='_blank'>Publication <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={project4} alt="" />
            </div>
            <div className="card-content">
              <div className="card-category">
                <ul>
                  <li>Web</li>
                </ul>
              </div>
              <div className="card-title">Web-Based Student Registration System Development - STMIK Samarinda</div>
              <div className="card-desc">Developed an admin backend system and database to efficiently manage and monitor student registration data. Implemented an end-to-end registration workflow with a structured and seamless process.</div>
              <div className="card-tools">
                <ul>
                  <li>Laravel 11</li>
                  <li>Spatie</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="card-links">
                <a href="https://github.com/Ryan-Jusniansyah/Project-STMIK/tree/master" target='_blank'>Github <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={project5} alt="" />
            </div>
            <div className="card-content">
              <div className="card-category">
                <ul>
                  <li>Mobile</li>
                  <li>Android</li>
                </ul>
              </div>
              <div className="card-title">Lung Cancer Classification Using Convolutional Neural Network (CNN)</div>
              <div className="card-desc">Developed a Flutter mobile app for image-based AI prediction with an intuitive upload and result interface. Integrated AI model APIs to enable real-time predictions.</div>
              <div className="card-tools">
                <ul>
                  <li>Python</li>
                  <li>Flutter</li>
                </ul>
              </div>
              <div className="card-links">
                <a href="https://github.com/rizkasmita/A4_PAMOBILEKB" target='_blank'>Github <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
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
            <a href=""><i class="fa-regular fa-envelope"></i> asmitarizka@gmail.com</a>
            <a href="https://www.linkedin.com/in/rizkaasmita" target='_blank'><i class="fa-brands fa-linkedin-in"></i> rizkaasmita</a>
            <a href="https://github.com/rizkasmita" target='_blank'><i class="fa-brands fa-github"></i> rizkasmita</a>
            <a href="https://wa.me/6281346331092" target='_blank'><i class="fa-brands fa-whatsapp"></i> +62 813 4633 1092</a>
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
