import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => (
  <div>
    <Helmet>
      <title>About</title>
    </Helmet>

    <div className="container-full">
      <div>
        <div>
          <h2>About</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          Content
        </div>
      </div>
    </div>
  </div>
);

export default About;
