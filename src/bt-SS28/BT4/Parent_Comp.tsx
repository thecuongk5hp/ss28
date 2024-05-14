import React, { Component } from 'react';
import Children_Comp from './Children_Comp';
interface ClassBT4 {
    name:string
}

export default class Parent_Comp extends Component <any,ClassBT4>{
  constructor(props:ClassBT4) {
    super(props);
    this.state = {
      name: "Nguyễn Thế Cường"
    };
  }

  render() {
    return (
      <div>
        <h1>Họ và tên bên component cha: {this.state.name}</h1>
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}
import React, { Component } from 'react';
import Children_Comp from './Children_Comp';
interface ClassBT4 {
    name:string
}

export default class Parent_Comp extends Component <any,ClassBT4>{
  constructor(props:ClassBT4) {
    super(props);
    this.state = {
      name: "Nguyễn Thế Cường"
    };
  }

  render() {
    return (
      <div>
        <h1>Họ và tên bên component cha: {this.state.name}</h1>
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}
