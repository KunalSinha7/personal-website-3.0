import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
                <li><a href="https://twitter.com/sinhaRMA" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/kunal.sinha.355" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://drive.google.com/open?id=1Ug2UJG2EeNNkOuP84khJy2Krdp5IG_hv" target="_blank" className="icon fa-file"><span className="label">Resume</span></a></li>
                <li><a href="https://www.linkedin.com/in/kunalsinha98/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/KunalSinha7/" className="icon fa-github"><span className="label">GitHub</span></a></li>
        </ul>        
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
