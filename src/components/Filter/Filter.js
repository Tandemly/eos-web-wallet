import * as React from "react";
import { Field, reduxForm } from 'redux-form';

const recfilter = (value, item) => (
  Object.keys(item).some(k =>
    k !== 'src' &&
    (typeof item[k] === 'object' || Array.isArray(item[k])) ? recfilter(value, item[k]) : (
      typeof item[k] === typeof value &&
      new RegExp(`^${value}`, 'i').test(item[k])
    )
  )
);

const filter = (data, value) => !value ? data : data.filter(recfilter.bind(null, value));

class Filter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: null
    };
  }

  handleChange({ target: { value } }) {
    this.setState({ value });
  }

  render() {
    const { children, data } = this.props;
    const { value } = this.state;
    const handleChange = this.handleChange.bind(this);
    const filterValue = !isNaN(value) ? parseInt(value, 10) : value;

    return (
      <div>
        <div className="columns">
          <div className="column is-4 is-offset-8 u-mb3">
            <input
              aria-describedby="filter"
              className="input"
              name="filter"
              required
              placeholder="Filter"
              type="text"
              onChange={handleChange}
            />
          </div>
        </div>
    
        {React.cloneElement(children, { data: filter(data, filterValue) })}
      </div>
    );
  }
}

export default Filter;
