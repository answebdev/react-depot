import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './style.css';
import { valueToPercent } from '@mui/base';

const url = 'https://course-api.com/react-tabs-project';

// Used here: https://gatsby-strapi-portfolio-project.netlify.app/

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    // Convert it to JSON
    const newJobs = await response.json();
    // Set 'jobs' equal to 'newJobs'
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    );
  }

  return (
    <>
      <div>
        <Helmet>
          <title>React Depot | Tabs</title>
          <style type='text/css'>
            {`
              :root {
                fixed-width: 620px;
              }
              
              body {
                background-color: hsl(210, 36%, 96%);
              }
            `}
          </style>
        </Helmet>
      </div>
      <div>
        <h2>Jobs</h2>
      </div>
    </>
  );
};

export default App;
