import React from 'react'
import PropTypes from 'prop-types'
import avatar from '../images/Avatar.svg'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <img src={avatar} alt="Avatar" className="logo"/>
        <div className="content">
            <div className="inner">
                <h1>Kunal Sinha</h1>
                <p>Developer, Tech Enthusiast, Soccer Fan, Student</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('education')}}>Education</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
