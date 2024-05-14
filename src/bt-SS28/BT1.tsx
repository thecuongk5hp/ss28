import React, { Component } from 'react'
interface ClassBT1 {
    fullName:string,
}
export default class BT1 extends Component <any,ClassBT1>{
    constructor(props:ClassBT1) {
        super(props);
        this.state = {
            fullName: "Nguyễn Thế Cường",   
        }
    }
  render() {
    return (
      <div>
            <h1>Họ và tên: {this.state.fullName}</h1>
      </div>
    )
  }
}
