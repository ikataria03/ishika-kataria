function Widecard({ title, where, from, to }: any) {
    return (
        <div className="widecard">
            <div className="compdet">
                <h3>{title}</h3>
                <h4 className="secondtext">{where}</h4>
                <h4 className="secondtext">{from} - {to}</h4>
            </div>
        </div>
    )
}

export default Widecard;
