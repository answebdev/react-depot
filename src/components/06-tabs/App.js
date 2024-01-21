import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './style.css';

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

  // Destructure properties
  // This line must go here, right after the loading; if placed above, you will get an error:
  // 'TypeError: Cannot destructure property 'company' of 'jobs[value]' as it is undefined'.
  // This is because the 'jobs' state is initially set to an empty array (see above).
  // That's why we need to destructure here, right after the loading.
  // Because initially, it's an empty array; and then, after the loading, 'jobs' will no longer be an empty array,
  // rather, it will be an array of jobs that is coming from the API.
  const { company, dates, duties, title } = jobs[value];

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
      <section data-testid="custom-element" className='section'>
        <div className='title'>
          <h2>Experience</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          {/* btn container */}
          <div className='btn-container'>
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          {/* job info */}
          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
};

export default App;
