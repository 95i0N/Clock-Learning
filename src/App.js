import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Lecture from './components/Lecture';
import Exercise from './components/Exercise';
import Test from './components/Test';

const App = () => {
  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/lecture' element={<Lecture />} />
        <Route path='/quiz' element={<Test />} />
        <Route path='/exercise' element={<Exercise />} />
      </Routes>
    </div>
  );
};

export default App;
