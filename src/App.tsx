import './App.css'
import Panel, { PanelItem } from './components/Panel';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import { BsArrowReturnRight } from "react-icons/bs";


function App() {

  return (
    <div className="main-container">
      <div className="header">
        <div className="name">
          Luka Jovanovic
        </div>
        <div className="links">
          <a className="link" href="https://github.com/lukajvnic" target="_blank"><FaGithub size={20} id="github" color="#181717" /></a>
          <a className="link" href="https://www.linkedin.com/in/luka-j-ovanovic/" target="_blank"><FaLinkedin size={20} id="linkedin" color="#181717" /></a>
          <a className="link" href="mailto:l3jovano@uwaterloo.ca"><FaRegEnvelope size={20} id="email" color="#181717" /></a>
        </div>
      </div>
      <div className="block">
        <p>
          Studying computer science @ <a href="https://uwaterloo.ca/" target="_blank">UWaterloo</a>
        </p>
      </div>
      <div className="block">
        <p>
          I'm passionate about building meaningful and ethical software,
          with a focus on the average person's user experience.
        </p>
      </div>
      <div className="block">
        <p>
          I've recently been in the news for transit-related projects,
          including <a href="https://toronto.citynews.ca/video/2026/01/22/student-created-website-reveals-the-slow-speeds-of-ttc-streetcars-in-real-time/" target="_blank">CityNews</a>, <a href="https://www.blogto.com/city/2024/01/map-ttc-streetcar-system-looked/" target="_blank">BlogTO</a>, and <a href="https://uwaterloo.ca/math/news/waterloo-student-builds-program-track-speed-ttc-streetcars" target="_blank">Waterloo News</a>.
        </p>
      </div>
      <div className="block">
        <p>
          I try to diversify my interests, and am spending a lot of free time reading
          about urban planning, astronomy, and machine learning.
        </p>
      </div>

      <div className="page-break">
        ———
      </div>

      <div className="header">
        <div className="name">
          Work
        </div>
      </div>
      <div className="block panel-block">
        <Panel
          company="Shopify"
          date="May - Aug '26"
          image_url="https://cdn.worldvectorlogo.com/logos/shopify.svg"
        >
          <PanelItem>Incoming swe intern</PanelItem>
        </Panel>

        <Panel
          company="Royal Bank of Canada"
          date="Jul - Aug, '24 & '25"
          image_url="https://cdn.worldvectorlogo.com/logos/rbc-4.svg"
        >
          <PanelItem>Worked on the API security team</PanelItem>
          <PanelItem>Built a full-stack financial plan review system</PanelItem>
        </Panel>
      </div>


      <div className="page-break">
        ———
      </div>

      <div className="header">
        <div className="name">
          Projects
        </div>
      </div>
      <div className="block">
        [INSERT] list of dropdowns for projects (on hover) (roman numerals)
        <ol>
          <li>ttcleaderboard</li>
          <li>savebasketweaving</li>
          <li>nuncius</li>
          <li>labpath</li>
          <li>avocado</li>
          <li>studyscope</li>
          <li>old streetcars</li>
          <li>flowfields</li>
          <li>uwpolls</li>
          <li>yapchain</li>
          <li>navika</li>
        </ol>
        <div className="dropdowns-container">
          <div className="dropdown">
            <div className="dropdown-header">
              <div className="dropdown-arrow">

              </div>
              <div className="dropdown-title">
                ttcleaderboard
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="bp-header">
          I've enjoyed working on these projects
        </div>
        <ol className="bp-content" type="i">
          <li><a>ttcleaderboard</a> ~ live leaderboard of <a>TTC</a> streetcars by speed</li>
          <li><a>savebasketweaving</a> ~ emails <a>MPPs</a> in protest of <a>OSAP</a> cuts</li>
          <li><a>nuncius</a> ~ encrypted chatroom, mainly to learn cryptography</li>
        </ol>
        <div className="bp-header">
          See more in my (semi-exhaustive) <a>project catalogue</a>
        </div>
      </div>
      <div className="footer">
        <div className="footer-c">
          Лука Јовановић
        </div>
        <div className="footer-c">
          © 2026
        </div>
      </div>
    </div>
  )
}

export default App
