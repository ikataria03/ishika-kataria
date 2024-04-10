import {
    Link
} from "react-router-dom";

function Navitem({ tolink, item }: any) {
    return (
        <li id={item}>
            <Link to={tolink}>{item}</Link>
        </li>
    )

}

export default Navitem;
