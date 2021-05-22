import React from "react";
import Header from './components/Header/Header'
import Todo from './components/Todo/Todo'
import TaskProvider from './store/TaskProvider'

function App() {
  return (<React.Fragment>
    <Header />
    <TaskProvider><Todo /></TaskProvider>
  </React.Fragment>)
}

export default App;
