import React, { Component } from 'react';

interface ChildrenProps {
    name: string;
  }
export default class Children_Comp extends Component<ChildrenProps> {
  render() {
    return (
      <div>
        <h1>Họ và tên bên component con: {this.props.name}</h1>
      </div>
    );
  }
}




