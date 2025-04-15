import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import UserInfo from './components/UserInfo'
import TaskComponent from './components/TaskComponent'
import Counter from './components/Counter'
import TaskForm from './components/TaskForm'

function App() {
  // const taskData = [
  //   {
  //     id: 1,
  //     title: "Office Work",
  //     description: "Complete project report",
  //   },
  //   {
  //     id: 2,
  //     title: "Garden Work",
  //     description: "Water the plants",
  //   },
  //   {
  //     id: 3,
  //     title: "Shopping",
  //     description: "Buy milk and eggs",
  //   },
  //   {
  //     id: 4,
  //     title: "Shopping",
  //     description: "Buy milk and eggs",
  //   },
  //   {
  //     id: 5,
  //     title: "Shopping",
  //     description: "Buy milk and eggs",
  //   },
  // ];

  // function List() {
  //   const listItems = taskData.map(task => <li>{task.title}</li>);
  //   return <ul>{listItems}</ul>;
  // }

  // Alert for class component
  function handleAlert() {
    alert("Button clicked!");
  }

  return (
    <div>
    {/*use npm run dev*/}
      <Greeting username="test"></Greeting>
      <Counter></Counter>
      <UserInfo handleClick={handleAlert} />
      <TaskComponent></TaskComponent>
      {/* <span>
        {List()}
      </span>
      <TaskForm></TaskForm> */}
    </div>
  )
}

export default App
