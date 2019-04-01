import React, { Component } from 'react';

class Field extends Component{
  render() {
    return (
      <div className="row">
        <input type={this.props.item.type}
               name={this.props.item.name}
               value={this.props.item.value}
               onChange={(val, prevVal) => console.log(val, prevVal)}/>
      </div>
    );
  }
}

export default Field;

