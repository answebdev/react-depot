import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BirthdayReminder from './components/01-birthday-reminder/App';
import Tours from './components/02-tours/App';
import Error from './components/Error';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/birthday-reminder' element={<BirthdayReminder />} />
        <Route exact path='/tours' element={<Tours />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
