
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import  Experience from './Components/Experience';
import Projects from './Components/Projects';
import Navbar from './Components/UI/Navbar';
import Footer from './Components/Footer';
import ProjectDisplay from './Components/ProjectDisplay';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/personalwebsite" element={<Home/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

