import React from 'react';

const ListItem = (props) => (
  <div>
    <ol>
      { props.item.name } is thankful for ...
      <li>{props.item.gratitude[0]}</li>
      <li>{props.item.gratitude[1]}</li>
      <li>{props.item.gratitude[2]}</li>
    </ol>
  </div>
)

export default ListItem;