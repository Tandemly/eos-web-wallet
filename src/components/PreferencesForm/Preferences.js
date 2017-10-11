import React from 'react';
// import validation
// import mutation

const PreferencesForm = () => (
  <form>
    <fieldset className="form-group">
      <label htmlFor="pictureURL">Picture URL</label>
      <input
        aria-describedby="pictureURL"
        className="form-control form-control-lg"
        name="pictureURL"
        required
        type="text"
      />
    </fieldset>

    <fieldset className="form-group">
      <label htmlFor="displayName">Display Name</label>
      <input
        aria-describedby="displayName"
        className="form-control form-control-lg"
        name="displayName"
        required
        type="text"
      />
    </fieldset>

    <fieldset className="form-group">
      <label htmlFor="about">About (150 Character Max)</label>
      <input
        aria-describedby="about"
        className="form-control form-control-lg"
        name="about"
        required
        type="text"
      />
    </fieldset>

    <fieldset className="form-group">
      <label htmlFor="location">Location</label>
      <input
        aria-describedby="location"
        className="form-control form-control-lg"
        name="location"
        required
        type="text"
      />
    </fieldset>

    <fieldset className="form-group">
      <label htmlFor="website">Website</label>
      <input
        aria-describedby="website"
        className="form-control form-control-lg"
        name="website"
        required
        type="text"
      />
    </fieldset>

    <div className="row col-12 no-gutters p-0">
      <div className="col-sm-auto col-12 pl-0 pr-0">
        <button
          className="btn btn-primary btn-lg btn-block"
          type="submit"
        >
          Update Information
        </button>
      </div>
    </div>
  </form>
);

export default PreferencesForm;
