import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from '../logo.svg';
import './Error.css';

const Error = () => {
  return (
    <div className='Error'>
      <div>
        <Helmet>
          <title>React Depot | Error</title>
        </Helmet>
      </div>
      <header className='Error-header'>
        <img src={logo} className='Error-logo' alt='logo' />
        <p className='Error-message'>Sorry, page not found.</p>
        <Link className='main-link' to='/'>
          Home
        </Link>
      </header>
    </div>
  );
};

export default Error;
