import Widecard from '../components/Widecard';
import ucblogo from '../img/Berkeley-CDSS-Logo.png';

function Education() {
    return (
        <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.A. in Data Science, 
            Concentration in Business and Industrial Analytics" 
            where="University of California, Berkeley" from="August 2021" to="May 2025" />
            <img src={ucblogo} alt="UCB-logo" className="ucblogo"></img>
        </div>
    )
}

export default Education;
