import Navitem from './Navitem';

function Navbar() {
    /*
    const activeitem =(x: any) =>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    */
    return (
        <nav>
            <ul>
                <Navitem item="Home" tolink="/" ></Navitem>
                <Navitem item="Experience" tolink="/experience" ></Navitem>
                <Navitem item="Education" tolink="/education" ></Navitem>
                <Navitem item="Projects" tolink="/projects" ></Navitem>
                <Navitem item="Skills" tolink="/skills" ></Navitem>
                <Navitem item="Resume" tolink="/resume"></Navitem>
            </ul>
        </nav>
    )
}

export default Navbar;
