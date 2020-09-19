import React from 'react'
import PropTypes from 'prop-types'

import profilepic from '../images/profile2.webp'
import working from '../images/work.webp'
import purdue from '../images/purdue.webp'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={profilepic} alt=""/></span>
          <p>Hi, I'm Kunal Sinha. I'm a software developer, tech enthusiast, student, leader, and soccer fan.</p>
          <p>I just moved to Boston, MA to start my first full-time job as a full-stack software engineer at CarGurus. For now, my main hobby is explore my new city and discover what life is like in such a diverse and large city. In my free time, you might find me working on a project at a <a href="https://mlh.io/">hackathon</a>, reading articles from <a href="https://www.theverge.com">The Verge</a>, or watching soccer games (#HALAMADRID).</p>          
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={working} alt="" /></span>
          <h3><a href="https://www.cargurus.com/">CarGurus</a></h3>
          <h4>Full-Stack Software Engineer</h4>
          <p> Starting in August 2020, I joined CarGurus for my first full-time job as a Full-Stack Software Engineer. So far, I have been learning as much as I can about the industry and various tech that is used. 
          </p>
          <h3>Cerner Corporation</h3>
          <h4>Software Intern</h4>
          <p> In the summer of 2019, I interned at Cerner Corporation as a software intern. Over the course of this internship, I got a chance to contribute to the development of a new product from the bottom up. 
            I began the second iteration of a project built by a previous intern, using Javascript for the frontend and Cerner Command Language (CCL) as the database language. 
            I got the chance to develop my skills even further and got the chance to take part in a few different roles. 
            I also got the chance to expand my knowledge of the healthcare industry, from the various product that Cerner has built in addition to the future that they are planning. 
          </p>
          <h3>Indiana Health Information Exchange</h3>
          <h4>Solutions Engineering Intern</h4>
          <p>In the summer of 2018, I got the opportunity to work at Indiana Health Information Exchange (IHIE).
            This was my first internship as an aspiring software engineer, and I got the chance to learn a lot about life as a developer.
            Over the course of the summer, I learned technical skills such as SQL, Jenkins, Maven, and JUnit Testing while further developing my skills in Java. I also got the fantastic opportunity to learn more about the healthcare industry and picked up domain knowledge including standards such as FHIR and HL7.
          </p>
          <p>  
            Using the skills I learned and had I designed and automated the new unit testing suite to be used during the Jenkins build process using Java, JUnit, SQL, Jenkins, and Maven. This decreased testing time during weekly deployments by 80% and I was able to modify all previous test cases to work with the new unit testing suite.
          </p>
          <h3>Johnson and Johnson Vision Care</h3>
          <h4>Intern - Research and Development</h4>
          <p>
            In the summer of 2017, I received my first opportunity within the Research and Development platform at Johnson and Johnson Vision Care. While this was not a software engineering internship, I learned a lot about the medical device industry and about corporate research in general.
          </p>
          <p>  
            I was able to apply some of my programming skills to help develop the user interface for internal tools in Matlab. I also conducted research on contact lens performance using Tear Surface Interferometry (TSI) and assembled contact lenses in Materials Science Laboratory.
          </p>
          {close}
        </article>

        <article id="education" className={`${this.props.article === 'education' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Education</h2>
          <span className="image main"><img src={purdue} alt="" /></span>
          <h3>Purdue University</h3>
          <p>I received Bachelor's Degree in <strong>Computer Science</strong> with concentrations in <em>Software Development and Database and Information Systems</em> graduating in <b>May 2020</b> - unfortunately in the midst of a pandemic :(</p>
          <p>At Purdue, you could have found me involved in projects as president of <a href="https://purduehackers.com">Purdue Hackers</a>, wondering about the innovations in bioengineering within IEEE, watching basketball games at Mackey Arena, or exploring the different cultures around Purdue.</p>
          <p>Past Coursework - Computer Science Classes:</p>
          <ul>
            <li>CS 18000 - Problem Solving and Object-Oriented Programming</li>
            <li>CS 18200 - Foundations of Computer Science</li>
            <li>CS 24000 - Programming in C</li>
            <li>CS 25000 - Computer Architecture</li>
            <li>CS 25100 - Data Structures and Algorithms</li>
            <li>CS 25200 - Systems Programming</li>
            <li>CS 30700 - Software Engineering</li>
            <li>CS 34800 - Information Systems</li>
            <li>CS 35400 - Operating Systems</li>
            <li>CS 35500 - Introduction to Cryptography</li>
            <li>CS 37300 - Data Mining and Machine Learning</li>
            <li>CS 38100 - Introduction to the Analysis of Algorithms</li>
            <li>CS 40700 - Software Engineer Senior Project</li>
            <li>CS 40800 - Software Testing</li>
            <li>CS 44800 - Introduction to Relational Database Systems</li>
            <li>CS 47100 - Artificial Intelligence</li>
            <li>CS 49000 - Computational Genomics</li>
          </ul>
          <p>Past Coursework - other Classes:</p>
          <ul>
            <li>BIOL 11000 - Fundamentals of Biology I</li>
            <li>BIOL 11100 - Fundamentals of Biology II</li>
            <li>COM 11400 - Fundamentals of Speech</li>
            <li>EAPS 37500 - Fossil Fuels, Energy, and Society</li>
            <li>ECON 25100 - Microeconomics</li>
            <li>ENGL 10600 - First Year Composition</li>
            <li>ENGL 42100 - Technical Writing</li>
            <li>ENTR 20000 - Introduction to Entrepreneurship and Innovation</li>
            <li>MA 16200 - Plane Analytic Geometry And Calculus II</li>
            <li>MA 26100 - Multivariate Calculus</li>
            <li>MA 26500 - Linear Algebra</li>
            <li>PHIL 11000 - Big Questions: Introduction to Philosophy</li>
            <li>SOC 10000 - Introduction to Sociology</li>
            <li>STAT 41600 - Probability</li>
            <li>STAT 51100 - Statistical Methods</li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main