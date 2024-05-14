import React, { Component } from 'react';

interface User {
  id: number;
  name: string;
  address: string;
}

export default class BT3 extends Component<any, { users: User[] }> {
  constructor(props: any) {
    super(props);
    // Khởi tạo state với một mảng users
    this.state = {
      users: [
        { id: 1, name: "Nguyễn Thế Cường", address: "Hà Nội" },
        { id: 2, name: "Nguyễn Văn A", address: "Hồ Chí Minh" },
        { id: 3, name: "Trần Thị B", address: "Đà nẵng" }
      ]
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              Họ và tên: {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
