import React, { useState } from 'react';
import './App.css';
import Item from './components/Item';
import Tabs from './components/Tabs';
import AddTask from './components/AddTask';
import { useEffect } from 'react/cjs/react.development';

function App() {
  const [currentTab, setcurrentTab] = useState("all");
  const [title, settitle] = useState("")
  const [tasks, settasks] = useState([])

  const onTextChange = e => {
    settitle(e.target.value)
  }
  const addTask = (e) => {
    e.preventDefault();
    const newTasks = [...tasks, { title: title, state: "active" }]
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    settitle("")
    fetchData();
  };
  const completeTask = (index) => {
    const newTasks = [...tasks];
    if (newTasks[index].state === 'active') {
      newTasks[index].state = 'completed';
    } else if (newTasks[index].state === 'completed') {
      newTasks[index].state = 'active';
    } else {
      console.log("nothing")
    }
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    fetchData();
  }
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    fetchData();
  }
  const deleteAllTasks = () => {
    const completedTasks = tasks.filter(task => task.state !== 'completed');
    localStorage.setItem("tasks", JSON.stringify(completedTasks));
    fetchData();
  }
  const fetchData = () => {
    const local = localStorage.getItem("tasks");
    const localData = JSON.parse(local) === null ? [] : JSON.parse(local);
    settasks(localData)
  }
  useEffect(() => {
    const local = localStorage.getItem("tasks");
    const localData = JSON.parse(local) === null ? [] : JSON.parse(local);
    settasks(localData);
  }, [])
  return (
    <div className="App">
      <h1>#todo</h1>
      <main>
        <Tabs currentTab={currentTab} setcurrentTab={setcurrentTab} />
        <hr />
        <AddTask AddTask={addTask} onTextChange={onTextChange} title={title} currentTab={currentTab} />
        <Item tasks={tasks} CompleteTask={completeTask} currentTab={currentTab} DeleteTask={deleteTask} deleteAllTasks={deleteAllTasks} />
      </main>
      <footer>
        <p>created by iwa-temmy - devChallenges.io</p>
      </footer>
    </div >
  );
}

export default App;
