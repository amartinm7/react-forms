import React, { Component } from 'react';
import Field from './Field'

class DymanicForm extends Component {
  
  render() {
    console.log(JSON.stringify(this.props.model))
    const items = this.props.model.map(
      (item, key) =>
        <Field item={item} key={item.id} />
    );

    return (
      <div>
        {items}
      </div>
    );
  }
}

export default DymanicForm;
