type Skills = {
    languages: string[],
    frameworks: string[],
    technologies: string[]
}

function Skills() {

    const skills: Skills = {
        'languages': ['Python', 'Java', 'SQL', 'R', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Scheme', 'Wolfram Mathematica'],
        'frameworks': ['Django', 'React.js', 'pandas', 'numpy', 'JUnit', 'pytest', 'scikit-learn', 'matplotlib', 'seaborn'],
        'technologies': ['Elastic Stack', 'Linux/Unix', 'AWS', 'Kubernetes', 'MongoDB', 'ArcGIS', 'Postman', 'Google BigQuery', 'Google Cloud Platform', 'Grafana', 'Docker', 'Wazuh', 'Jira', 'Confluence']
    }

    return (
        <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <div className="row">
                <div className="column">
                    <h3 className="subskill">Languages</h3>
                    <ul>
                        {skills.languages.map((value: string) => {
                            return <li>{value}</li>
                        })}
                    </ul>
                </div>
                <div className="column">
                    <h3 className="subskill">Frameworks/Libraries</h3>
                    <ul>
                        {skills.frameworks.map((value: string) => {
                            return <li>{value}</li>
                        })}
                    </ul>
                </div>
                <div className="column">
                    <h3 className="subskill">Technologies</h3>
                    <ul>
                        {skills.technologies.map((value: string) => {
                            return <li>{value}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;
