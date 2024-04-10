import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Social() {
    return (
        <div className="social">
            <a href="https://www.linkedin.com/in/ishika-kataria/" target="_blank" rel="noopener noreferrer" style={{ marginRight: "65px", fontSize:"30px" }}><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://github.com/ikataria03" target="_blank" rel="noopener noreferrer" style={{ fontSize:"30px" }}><FontAwesomeIcon icon={faGithub} /></a>
        </div>
    )
}

export default Social;
