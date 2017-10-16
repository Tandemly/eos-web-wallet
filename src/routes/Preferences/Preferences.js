import * as React from "react";
import { Helmet } from 'react-helmet';
import Container from 'containers/Preferences';

const Preferences = () => (
  <div className="content">
    <Helmet>
      <title>Preferences</title>
    </Helmet>

    <div className="columns">
      <div className="column">
        <h2>Preferences</h2>
        <Container />
      </div>

      <div className="column u-ml3">
        <div className="hidden-md-down col-lg-6">
            <h5>Profile Preview</h5>
            <div className="module p-4">
              <div className="d-flex flex-row items-center">
                <img alt="" className="user-thumbnail" src="/images/male_2.jpg" />
                <div className="profile-meta">
                  <div className="username">
                    Display Name
                  </div>
                  <div className="location">
                    location
                  </div>
                  <div className="website">
                    website
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row">
                {/* eslint-disable max-len */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a elit pulvinar, varius mauris non, condimentum tellus. Maecenas vitae ultrices diam. Lorem ipsum dolor sit amet, consectetur elit.
                </p>
                {/* eslint-enable max-len */}
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
);

export default Preferences;
