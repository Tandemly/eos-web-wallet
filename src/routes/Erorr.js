import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

const Err = () => (
  <div>
    <Helmet>
      <title>Err</title>
    </Helmet>
    <div className="container-full">
      <div>
        <div>
          <h2>Err</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          Sorry for the error
        </div>
      </div>
    </div>
  </div>
);

export default Err;
