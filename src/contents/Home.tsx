import profilepic from '../img/portcrop.jpg';
import Social from '../components/Social'
import ReactTypingEffect from 'react-typing-effect';


function Home() {
    return (
        <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect
                className="typingeffect"
                text={["Hi!", "My name is Ishika Kataria.", "Welcome to my website."]}
                speed={100} // Typing speed (lower value = faster typing)
                eraseSpeed={50} // Erasing speed (lower value = faster erasing
                eraseDelay={500} // Time before erasing starts (in milliseconds)
                typingDelay={500}  // Time before typing the next string starts (in milliseconds)
            />
            <Social />
        </div>
    )
}

export default Home;
