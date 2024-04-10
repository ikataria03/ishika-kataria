import './css/App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import Experience from './contents/Experience';
import Education from './contents/Education';
import Projects from './contents/Projects';
import Skills from './contents/Skills';
import Resume from './contents/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>

  );
}

export default App;