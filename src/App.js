import React, { useState } from 'react';
import './App.css';
import Item from './components/Item';
import Tabs from './components/Tabs';
import AddTask from './components/AddTask';

function App() {
  const [currentTab, setcurrentTab] = useState("all");
  const [title, settitle] = useState("")

  const onTextChange = e => {
    settitle(e.target.value)
  }
  const addTask = (e) => {
    e.preventDefault();
    const newTasks = [...localData, { title: title, state: "active" }]
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    settitle("")
  };
  const completeTask = (index) => {
    const newTasks = [...localData];
    newTasks[index].state = 'completed';
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }
  const deleteTask = (index) => {
    const newTasks = [...localData];
    newTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }
  const deleteAllTasks = () => {
    const completedTasks = localData.filter(task => task.state !== 'completed');
    localStorage.setItem("tasks", JSON.stringify(completedTasks));
  }
  const local = localStorage.getItem("tasks");
  const localData = JSON.parse(local) === null ? [] : JSON.parse(local);
  return (
    <div className="App">
      <h1>#todo</h1>
      <main>
        <Tabs currentTab={currentTab} setcurrentTab={setcurrentTab} />
        <hr className="horizontal-line" />
        <AddTask AddTask={addTask} onTextChange={onTextChange} title={title} currentTab={currentTab} />
        <Item tasks={localData} CompleteTask={completeTask} currentTab={currentTab} DeleteTask={deleteTask} deleteAllTasks={deleteAllTasks} />
      </main>
      <footer>
        <p>created by iwa-temmy - devChallenges.io</p>
      </footer>
    </div >
  );
}

export default App;
