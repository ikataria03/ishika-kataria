function Project({ url, title, info, stack }: any) {
    return (
        <div className="project">
            <div className="compdet">
                <h3 className="project-title"><a href={url} target="_blank">{title} <i className="fas fa-external-link-alt"></i></a></h3>
                <p>{info} <b>{stack}</b></p>
            </div>
        </div>
    )
}

export default Project;
