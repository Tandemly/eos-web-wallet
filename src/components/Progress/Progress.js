import * as React from "react";

const Progress = ({ step }) => (
  <div className="login-progress">
    <ul className="d-flex justify-content-between items-center col-12 mb-4">
      <li className={['col-0', step >= 1 ? 'active' : ''].join(' ')} />
      <li className={['col-4', step >= 2 ? 'active' : ''].join(' ')} />
      <li className={['col-4', step >= 3 ? 'active' : ''].join(' ')} />
      <li className={['col-4', step >= 4 ? 'active' : ''].join(' ')} />
    </ul>
  </div>
);

export default Progress;
