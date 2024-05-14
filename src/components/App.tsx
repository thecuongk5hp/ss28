import React from 'react'
// import Functional from './components/Functional.tsx';
// import Class from "./components/Class.tsx"
// import StateClass from './components/StateClass.tsx';
// import StateFunctional from './components/StateFunctional.tsx';
import BT1 from './ss28/BT1'
import BT2 from './bt-SS28/BT2'
import BT3 from './bt-SS28/BT3'
import Parent_Comp from './bt-SS28/BT4/Parent_Comp'
import BT5_Parent from './bt-SS28/BT5/BT5_Parent'
import Bt06_parent from './bt-SS28/BT06/Bt06_parent'

export default function App() {
//   const fullName: string = "rikkei education";
//   const students: string[] = ["thu", "hoa", "ngọc"];
//   const numbers: number[] = [5,6,7,8,9]
//   const age:number =25;
  return (
    <div>
      {/*
        Props và state
        1. props : properties
         dùng để truyền dữ liệu từ component cha sang component con 
         thế nào được gọi là component cha
        2. state:
         - dùng để quản lý dữ liệu bên trong component
      */}
      {/* <Functional name={fullName} students={students}></Functional>
      <Class age={age} numbers={numbers}></Class>
      <StateClass></StateClass>
      <StateFunctional></StateFunctional> */}
      <BT1></BT1>
      <BT2></BT2>
      <BT3></BT3>
      <Parent_Comp></Parent_Comp>
      <BT5_Parent></BT5_Parent>
      <Bt06_parent></Bt06_parent>
    </div>
  )
}
