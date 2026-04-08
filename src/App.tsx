import './App.css'
import Panel, { PanelItem } from './components/Panel';
import Dropdown from './components/Dropdown';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <div className="main-container">
      <Analytics />
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
          date="May - Aug 2026"
          image_url="https://cdn.worldvectorlogo.com/logos/shopify.svg"
        >
          <PanelItem>Incoming swe intern, security team</PanelItem>
        </Panel>

        <Panel
          company="Krembil Research Institute"
          date="April 2026 - Present"
          image_url="https://cdn.worldvectorlogo.com/logos/university-of-toronto.svg"
        >
          <PanelItem>Machine learning + neuroscience researcher</PanelItem>
        </Panel>

        <Panel
          company="Royal Bank of Canada"
          date="Summer 2024 + 2025"
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
          Some projects
        </div>
      </div>
      <div className="space"></div>
      <div className="block">
        <Dropdown
          title="ttcleaderboard"
          description={<span>live ranking of streetcars by speed <strong style={{ color: "#333" }}>(15k+ users)</strong></span>}
          count={1}
        >
          <div className="space"></div>
          <div>
            I made this site for fun after finding the ttc's public api.
            People on reddit found it interesting and it quickly got a lot of attention.
            From an urban planning perspective, the instantaneous speeds of streetcars are not very meaningful,
            so this site should be viewed more as entertainment than a genuine source of discontent
            with the ttc.
          </div>
          <div className="space"></div>
          <div>
            My message through this project is not that transit is bad and more people
            should drive, but that transit is bad and we need to work to make it better.
          </div>
          <div className="space"></div>
          <div>
            site: <a href="https://ttcleaderboard.vercel.app/" target="_blank">ttcleaderboard.vercel.app</a>
          </div>
          <div>
            github: <a href="https://github.com/lukajvnic/ttc-leaderboard" target="_blank">github.com/lukajvnic/ttc-leaderboard</a>
          </div>
          <div>
            in the news:&nbsp;&nbsp;
            <a href="https://www.youtube.com/watch?v=h-bgoxTdCJc" target="_blank">citynews</a>&nbsp;&nbsp;
            <a href="https://www.blogto.com/city/2026/01/site-tracks-slow-toronto-streetcars/" target="_blank">blogto</a>&nbsp;&nbsp;
            <a href="https://uwaterloo.ca/math/news/waterloo-student-builds-program-track-speed-ttc-streetcars" target="_blank">waterloo</a>
          </div>
        </Dropdown>

        <Dropdown
          title="savebasketweaving"
          description={<span>emailer to protest OSAP cuts <strong style={{ color: "#333" }}>(1k+ emails sent)</strong></span>}
          count={2}
        >
          <div className="space"></div>
          <div>
            Doug ford (premier of ontario) is trying to cut student financial aid (osap) grants, which are already only given out
            to students with a low enough household income. He rationalized this by saying that too many students are taking "basket weaving"
            courses instead of employable skills like stem, trades, or business. Naturally, he plans to cut
            everyone's grants, including those in stem, trades, and business.
          </div>
          <div className="space"></div>
          <div className="space"></div>
          <div>
            This website targets a more niche problem. In theory, a democracy means that you (yes you) have a say in
            the government's decisions. However, it feels as though now, more than ever, people feel like they have no control
            over how the government acts. One of the best ways to affect policy is by emailing local representatives, but again,
            people rarely do so because they feel like its meaningless. Of course, if a politician gets a thousand emails
            on the same topic, its not so meaningless anymore.
          </div>
          <div className="space"></div>
          <div className="space"></div>
          <div>
            By reducing friction, and making the emailing process as simple as possible (one click), the
            paradigm changes from "why" to "why not" and ultimately more emails get sent.
          </div>
          <div className="space"></div>
          <div>
            site: <a href="https://savebasketweaving.ca" target="_blank">savebasketweaving.ca</a>
          </div>
          <div>
            github: <a href="https://github.com/lukajvnic/save-basket-weaving" target="_blank">github.com/lukajvnic/save-basket-weaving</a>
          </div>
        </Dropdown>

        <Dropdown
          title="nuncius"
          description={<span>cli based end-to-end encrypted chatroom</span>}
          count={3}
        >
          <div>
            Learned about RSA encryption in math 135, and wanted to try implementing it myself.
            At around the same time I wanted to try learning kafka, so I decided to combine the
            two into one project.
          </div>
          <div className="space"></div>
          <div>
            github: <a href="https://github.com/lukajvnic/nuncius" target="_blank">github.com/lukajvnic/nuncius</a>
          </div>
        </Dropdown>

        <Dropdown
          title="endocrine disruptors"
          description={<span>applied ml research <strong style={{ color: "#333" }}>(labpath winner, published)</strong></span>}
          count={4}
        >
          <div>
            Attended the labpath research hackathon with two premed friends. They asked me to come along to help
            with the coding part. We built a linear regression model using scikit-learn to predict, given the
            chemical groups within the compound, whether or not it was an endocrine disruptor. The model
            achieved an accuracy of 94%. The abstract is now published in a URNCST journal.
          </div>
          <div className="space"></div>
          <div>
            links:&nbsp;&nbsp;
            <a href="https://drive.google.com/file/d/1woeatZHOE1xuFrGhneHQci-BVzlRKFtt/view?usp=sharing" target="_blank">paper</a>&nbsp;&nbsp;
            <a href="https://urncst.com/index.php/urncst/article/view/998/522" target="_blank">urncst</a>
          </div>
        </Dropdown>

        <Dropdown
          title="avocado"
          description={<span>tiktok fact checker <strong style={{ color: "#333" }}>(deltahacks winner)</strong></span>}
          count={5}
        >
          <div>
            Chrome extension that preloads tiktok videos and uses gemini to fact check them, providing a summary and a
            credibility score. Won the best use of gemini at deltahacks.
          </div>
          <div className="space"></div>
          <div>
            github: <a href="https://github.com/lukajvnic/Avocado" target="_blank">github.com/lukajvnic/Avocado</a>
          </div>
        </Dropdown>

        <Dropdown
          title="studyscope"
          description={<span>commissioned website for a tutoring service</span>}
          count={6}
        >
          <div>
            Studyscope is an tutoring service for elementary and high school students. I was commissioned to
            build them a website, and it's now maintained by their team.
          </div>
          <div className="space"></div>
          <div>
            site: <a href="https://studyscopetutoring.com/" target="_blank">studyscopetutoring.com</a>
          </div>
        </Dropdown>

        <Dropdown
          title="old streetcars"
          description={<span>interactive map of toronto's streetcar routes in 1945</span>}
          count={7}
        >
          <div>
            I made this in the eleventh grade while procrastinating studying for exams.
            Used google mymaps to plot old streetcar routes, and then put it on a vanilla javascript
            html page. not too technically complex, but from an urban planning perspective its really
            cool to see where the streetcar routes used to run, and it kind of gives context as to how
            the system ended up where it is today. BlogTO wrote an article about it.
          </div>
          <div className="space"></div>
          <div>
            site: <a href="https://lukajvnic.github.io/old-streetcar/" target="_blank">lukajvnic.github.io/old-streetcar</a>
          </div>
          <div>
            github: <a href="https://github.com/lukajvnic/old-streetcar" target="_blank">github.com/lukajvnic/old-streetcar</a>
          </div>
          <div>
            blogto: <a href="https://www.blogto.com/city/2024/01/map-ttc-streetcar-system-looked/" target="_blank">www.blogto.com/city/2024/01/map-ttc-streetcar-system-looked/</a>
          </div>
        </Dropdown>

        <Dropdown
          title="flowfields"
          description={<span>interesting graphical simulations using vector fields</span>}
          count={8}
        >
          <div>
            Final project for my highschool calculus class, where we expanded on the idea of
            slope fields from differential calc to implement vector fields and create cool looking
            organic shapes. Used perlin noise to make natural gradients.
          </div>
          <div className="space"></div>
          <div>
            site: <a href="https://lukajvnic.github.io/flowfields/" target="_blank">lukajvnic.github.io/flowfields</a>
          </div>
          <div>
            github: <a href="https://github.com/lukajvnic/flowfields" target="_blank">github.com/lukajvnic/flowfields</a>
          </div>
        </Dropdown>

        <Dropdown
          title="flappybird"
          description={<span>neural network trained to play flappy bird</span>}
          count={9}
        >
          <div>
            Old project from the seventh grade, but it was my first introduction to neural networks.
            This project closely follows a youtube tutorial then kind of diverges. Uses the NEAT library to
            train a neural network to play flappy bird.
          </div>
          <div className="space"></div>
          <div>
            github: <a href="https://github.com/lukajvnic/flappybird-neat" target="_blank">github.com/lukajvnic/flappybird-neat</a>
          </div>
        </Dropdown>

        <Dropdown
          title="yapchain"
          description={<span>web3 based chatroom <strong style={{ color: "#333" }}>(jamhacks winner)</strong></span>}
          count={10}
        >
          <div>
            Used the NEAR protocol & smart contracts to create a decentralized chatroom. We also made a graphical frontend
            where users can walk around a shared virtual space and chat. Won the best use of NEAR protocol.
          </div>
          <div>
            github: <a href="https://github.com/lukajvnic/yapchain" target="_blank">github.com/lukajvnic/yapchain</a>
          </div>
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
