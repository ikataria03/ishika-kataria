import Widecard from '../components/Widecard';

function Experience() {
    return (
        <div className="condiv">
            <h1 className="subtopic">My Experience</h1>
            <Widecard title="Undergraduate Data Science Assistant" where="California Consortium for Public Health Informatics & Technology" from="January 2023" to="Present" />
            <Widecard title="Software Development Intern" where="General Dynamics IT" from="June 2023" to="August 2023" />
            <Widecard title="Cybersecurity & Technical Intern" where="ManTech" from="May 2022" to="August 2022" />
        </div>
    )
}

export default Experience;
