import React, { Component } from 'react';
import BT5_Children from './BT5_Children';

interface ClassBT5 {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default class ProductParent extends Component <{}, ClassBT5>{
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 1,
            name: "Nguyễn Thế Cường",
            price: 100000,
            quantity: 5
        };
      }
  render() {
    return (
      <div>
        <BT5_Children name={this.state.name} />
      </div>
    );
  }
}
