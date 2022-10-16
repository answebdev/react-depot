import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import error from '../error.jpg';
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
        <p className='Error-message'>Sorry, page not found.</p>
        <Link className='main-link' to='/'>
          Home
        </Link>
        <br />
        <img src={error} className='Error-logo' alt='logo' />
      </header>
    </div>
  );
};

export default Error;
