import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Lecture from './components/Lecture';
import Quiz from './components/Quiz';
import Play from './components/Play';

const App = () => {
  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/lecture' element={<Lecture />} />
        <Route path='/play' element={<Play />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </div>
  );
};

export default App;
