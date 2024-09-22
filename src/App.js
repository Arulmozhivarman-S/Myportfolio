import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Skills from './components/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes  basename="/Myportfolio">
          <Route path='/'  element={<Homepage/>}/>
          <Route path='/skills'  element={<Skills/>}/>
          <Route path='/about'  element={<About/>}/>
          <Route path='/projects'  element={<Projects/>}/>
        </Routes>
     </Router>
     
    </div>
  );
}

export default App;
