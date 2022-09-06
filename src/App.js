import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Feedback from './components/FeedbackForm';
import Introduction from './components/Introduction';
function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Introduction />}/>
          <Route path='projects' element={<Projects />}/>
          <Route path='blogs' element={<Blogs/>}/>
          <Route path='feedback' element={<Feedback/>}/>
        </Routes>
    </div>
  );
}

export default App;
