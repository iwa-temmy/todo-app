import React, { useState } from 'react';
import './App.css';
import Item from './components/Item';
import Tabs from './components/Tabs';
import AddTask from './components/AddTask';

function App() {
  const [currentTab, setcurrentTab] = useState("all");
  const [title, settitle] = useState("")
  const [tasks, settasks] = useState([])

  console.log(tasks)
  const onTextChange = e => {
    settitle(e.target.value)
  }
  const addTask = (e) => {
    e.preventDefault();
    const newTasks = [...tasks, { title: title, state: "active" }]
    settasks(newTasks)
    settitle("")
  }
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].state = 'completed';
    settasks(newTasks);
  }
  const deleteTask = (index) => {
    const newtasks = [...tasks];
    newtasks.splice(index, 1);
    settasks(newtasks);
  }
  const deleteAllTasks = () => {
    const completedTasks = tasks.filter(task => task.state !== 'completed');
    settasks(completedTasks);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return (
    <div className="App">
      <h1>#todo</h1>
      <main>
        <Tabs currentTab={currentTab} setcurrentTab={setcurrentTab} />
        <hr className="horizontal-line" />
        <AddTask AddTask={addTask} onTextChange={onTextChange} title={title} currentTab={currentTab} />
        <Item tasks={tasks} CompleteTask={completeTask} currentTab={currentTab} DeleteTask={deleteTask} deleteAllTasks={deleteAllTasks} />
      </main>
    </div >
  );
}

export default App;
