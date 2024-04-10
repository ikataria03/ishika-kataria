import './css/App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;