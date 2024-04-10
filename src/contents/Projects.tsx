import Project from '../components/Project';

function Projects() {
    return (
        <div className="condiv">
            <h1 className="subtopic">My Projects</h1>
            <Project title="Spam Classification" info="Developed a robust spam email classifier with >85% accuracy." stack="scikit-learn, pandas, numpy" url="https://github.com/ikataria03/spamclassifier" />
            <Project title="Student Performance" info="A machine learning model to determine the effect of socioeconomic factors on the academic performance of high school students in Portugal." stack="XGBoost, scikit-learn, pandas, numpy" url="https://github.com/ikataria03/portugalstudents" />
            <Project title="Gitlet" info="Created a custom, slim version of Git from scratch supporting main functions (i.e. add, commit, rm, checkout, merge, etc.) using Java and various data structures (queues, linked lists, stacks, trees, hash tables, directed graphs)." stack="Java, JUnit, Linux" url="" />
        </div>
    )
}

export default Projects;
