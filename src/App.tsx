import './App.css'
import Panel, { PanelItem } from './components/Panel';
import Dropdown from './components/Dropdown';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';

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
          I'm currently studying computer science at the <a href="https://uwaterloo.ca/" target="_blank">University of Waterloo</a>, and
          have a strong interest in building meaningful and ethical software.
        </p>
      </div>
      <div className="block">
        <p>
          I've recently been in the news for a couple of transit-related projects,
          including <a href="https://toronto.citynews.ca/video/2026/01/22/student-created-website-reveals-the-slow-speeds-of-ttc-streetcars-in-real-time/" target="_blank">CityNews</a>, <a href="https://www.blogto.com/city/2024/01/map-ttc-streetcar-system-looked/" target="_blank">BlogTO</a>, and <a href="https://uwaterloo.ca/math/news/waterloo-student-builds-program-track-speed-ttc-streetcars" target="_blank">Waterloo News</a>.
        </p>
      </div>
      <div className="block">
        <p>
          I try to diversify my interests, and spend a good chunk of my free time
          reading about urban planning, astronomy, and machine learning.
        </p>
      </div>

      <div className="page-break">
        {/* ——— */}
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
        {/* ——— */}
      </div>

      <div className="header">
        <div className="name">
          Projects
        </div>
      </div>
      <div className="space"></div>
      <div className="block">
        <Dropdown
          title="ttcleaderboard"
          description={<span>live ranking of streetcars by speed <strong style={{ color: "#333" }}>(15k+ users)</strong></span>}
          count={1}
        >
          hi
        </Dropdown>

        <Dropdown
          title="savebasketweaving"
          description={<span>auto-emailer to protest OSAP cuts <strong style={{ color: "#333" }}>(1k+ emails)</strong></span>}
          count={2}
        >
          hi
        </Dropdown>

        <Dropdown
          title="nuncius"
          description={<span>cli based end-to-end encrypted chatroom</span>}
          count={3}
        >
          hi
        </Dropdown>

        <Dropdown
          title="endocrine disruptors"
          description={<span>applied ml research <strong style={{ color: "#333" }}>(labpath winner)</strong></span>}
          count={4}
        >
          hi
        </Dropdown>

        <Dropdown
          title="avocado"
          description={<span>tiktok fact checker <strong style={{ color: "#333" }}>(deltahacks winner)</strong></span>}
          count={5}
        >
          hi
        </Dropdown>

        <Dropdown
          title="studyscope"
          description={<span>commissioned website for a tutoring service</span>}
          count={6}
        >
          hi
        </Dropdown>

        <Dropdown
          title="old streetcars"
          description={<span>interactive map of toronto's streetcar routes in 1945</span>}
          count={7}
        >
          hi
        </Dropdown>

        <Dropdown
          title="flowfields"
          description={<span>graphical simulations using vector fields</span>}
          count={8}
        >
          hi
        </Dropdown>

        <Dropdown
          title="uwpolls"
          description={<span>website to post anonymous polls</span>}
          count={9}
        >
          hi
        </Dropdown>

        <Dropdown
          title="yapchain"
          description={<span>web3 based chatroom <strong style={{ color: "#333" }}>(jamhacks winner)</strong></span>}
          count={10}
        >
          hi
        </Dropdown>
      </div>

      <div className="footer">
        <div className="footer-c">
          Лука Јовановић
        </div>
        <div className="footer-c">
          Toronto, 2026
        </div>
      </div>
    </div>
  )
}

export default App
