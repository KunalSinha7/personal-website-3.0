import React from 'react'
import PropTypes from 'prop-types'

import profilepic from '../images/profile.jpg'
import workimg from '../images/work.jpg'
import purdue from '../images/purdue.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={profilepic} alt="" /></span>
          <p>Hi, I'm Kunal Sinha. I'm a software developer, tech enthusiast, student, leader, and soccer fan.</p>
          <p>When I'm on campus you can find me in class, studying, or leading a meeting as President of <a href="https://purduehackers.com">Purdue Hackers</a>. In my free time, you might find me working on a project at a <a href="https://mlh.io/">hackathon</a>, reading articles from <a href="https://www.theverge.com">The Verge</a>, or watching soccer games (#HALAMADRID).</p>          
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={workimg} alt="" /></span>
          <h3>Indiana Health Information Exchange</h3>
          <h4>Solutions Engineering Intern</h4>
          <p>In the summer of 2018, I got the opportunity to work at Indian Health Information Exchange (IHIE).
            This was my first internship as an aspiring software engineer, and I got the chance to learn a lot about life as a developer.
            Over the course of the summer, I learned technical skills such as SQL, Jenkins, Maven, and JUnit Testing while further developing my skills in Java. I also got the fantastic opportunity to learn more about the healthcare industry and picked up domain knowledge including standards such as FHIR and HL7.
          </p>
          <p>  
            Using the skills I learned and had I designed and automated the new unit testing suite to be used during the Jenkins build process using Java, JUnit, SQL, Jenkins, and Maven. This decreased testing time during weekly deployments by 80% and I was able to modify all previous test cases to work with the new unit testing suite.
          </p>
          <h3>Johnson and Johnson Vision Care</h3>
          <h4>Intern - Research and Development</h4>
          <p>
            In the summer of 2017, I recieved my first opportunity within the Research and Development platform at Johnson and Johnson Vision Care. While this was not a software engineering internship, I learned a lot about the medical device industry and about corporate research in general.
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
          <p>I am currently pursuing a Bachelor's Degree in <strong>Computer Science</strong> with concentrations in <em>Machine Intelligence, Software Development, and Database and Information Systems</em> with goal of graduating in <b>May 2020</b>.</p>
          <p>Past Coursework:</p>
          <ul>
            <li>CS 25000 - Computer Architecture</li>
            <li>CS 25100 - Data Structures and Algorithms</li>
            <li>CS 25200 - Systems Programming</li>
            <li>CS 30700 - Software Engineering</li>
            <li>CS 37300 - Data Mining and Machine Learning</li>
            <li>CS 35400 - Operating Systems</li>
          </ul>
          <p>Current Coursework (as of Jan 2019):</p>
          <ul>
            <li>CS 34800 - Information Systems</li>
            <li>CS 38100 - Introduction to the Analysis of Algorithms</li>
            <li>CS 47100 - Artifical Intelligence</li>
          </ul>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
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