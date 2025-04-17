// import { useState } from 'react'
// import './App.css'
// import Greeting from './components/Greeting'
// import UserInfo from './components/UserInfo'
// import TaskComponent from './components/TaskComponent'
// import Counter from './components/Counter'
// import TaskForm from './components/TaskForm'

// function App() {
//   // const taskData = [
//   //   {
//   //     id: 1,
//   //     title: "Office Work",
//   //     description: "Complete project report",
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Garden Work",
//   //     description: "Water the plants",
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "Shopping",
//   //     description: "Buy milk and eggs",
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "Shopping",
//   //     description: "Buy milk and eggs",
//   //   },
//   //   {
//   //     id: 5,
//   //     title: "Shopping",
//   //     description: "Buy milk and eggs",
//   //   },
//   // ];

//   // function List() {
//   //   const listItems = taskData.map(task => <li>{task.title}</li>);
//   //   return <ul>{listItems}</ul>;
//   // }

//   // Alert for class component
//   function handleAlert() {
//     alert("Button clicked!");
//   }

//   return (
//     <div>
//     {/*use npm run dev*/}
//       <Greeting username="test"></Greeting>
//       <Counter></Counter>
//       <UserInfo handleClick={handleAlert} />
//       <TaskComponent></TaskComponent>
//       {/* <span>
//         {List()}
//       </span>
//       <TaskForm></TaskForm> */}
//     </div>
//   )
// }

// export default App

// import { useState } from 'react'
// import './App.css'
// import Greeting from './components/Greeting'
// import UserInfo from './components/UserInfo'
// import TaskComponent from './components/TaskComponent'
// import Counter from './components/Counter'
// import TaskForm from './components/TaskForm'

// function App() {
//   function handleAlert() {
//     alert("Button clicked!");
//   }

//   return (
//     <div>
//     {/*use npm run dev*/}
//       <Greeting username="Test"></Greeting>
//       <Counter></Counter>
//       <UserInfo handleClick={handleAlert} />
//       <TaskComponent></TaskComponent>
//       <span>
//         {List()}
//       </span>
//       <TaskForm></TaskForm>
//     </div>
//   )
// }

// export default App


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";
import TaskRoutes from "./routes/TaskRoutes";
import { TaskProvider } from "./components/context/TaskContext";
import SignInForm from "./pages/SignInForm";
import { AuthContextProvider } from "./components/context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <TaskProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<SignInForm />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <AboutPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/task/*"
                element={
                  <ProtectedRoute>
                    <TaskRoutes />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </TaskProvider>
      </AuthContextProvider>
    </>
  );
}