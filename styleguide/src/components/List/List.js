import * as React from 'react';

type PropTypes = {
  /** list data */
  data: Array<any>,
  /** list item */
  renderItem: () => React.Node,
};

// TODO abstract upper level to avoid unused dispatch
const List = ({
  data,
  renderItem,
  ...props }: PropTypes) => (
  <ul {...props}>
    {data.map((item, key) =>  renderItem({ key, ...item }))}
  </ul>
);

export default List;
