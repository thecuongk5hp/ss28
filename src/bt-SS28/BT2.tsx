import React, { Component } from 'react'

interface ClassBT2 {
    id:number,
    name:string,
    date:string,
    address: string,
}
export default class BT2 extends Component <any, ClassBT2>{
    constructor(props:ClassBT2){
        super(props)
        this.state = {
            id:1,
            name:"Nguyễn Thế Cường",
            date:"04/06/2005",
            address:"Hà Đông, hà Nội"
        }

    }
  render() {
    return (
      <div>
            <h1>Thông tin cá nhân</h1>
            <p>id: {this.state.id}</p>
            <p>Tên: {this.state.name}</p>
            <p>Ngày sinh: {this.state.date}</p>
            <p>Địa chỉ: {this.state.address}</p>
      </div>
    )
  }
}

