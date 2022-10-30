import { Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './components/Home';
import BirthdayReminder from './components/01-birthday-reminder/App';
import Tours from './components/02-tours/App';
import Reviews from './components/03-reviews/App';
import Accordion from './components/04-accordion/App';
import Menu from './components/05-menu/App';
import Error from './components/Error';
// import './App.css';

// Source Video: https://www.youtube.com/watch?v=ly3m6mv5qvg&t=9s
// Code Repo: https://github.com/john-smilga/react-projects

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/birthday-reminder' element={<BirthdayReminder />} />
        <Route exact path='/tours' element={<Tours />} />
        <Route exact path='/reviews' element={<Reviews />} />
        <Route exact path='/accordion' element={<Accordion />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
