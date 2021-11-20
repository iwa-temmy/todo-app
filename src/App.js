import React, { useState } from 'react';
import './App.css';
import Item from './components/Item';
import Tabs from './components/Tabs';

function App() {
  const [currentTab, setcurrentTab] = useState("all");
  const [title, settitle] = useState()
  const [tasks, settasks] = useState([])

  console.log(tasks)
  const onTextChange = e => {
    e.preventDefault()
    settitle(e.target.value)
  }
  const AddTask = () => {
    const newTasks = [...tasks, { title: title, state: "active" }]
    settasks(newTasks)
    settitle("")
  }
  const CompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].state = 'completed';
    settasks(newTasks);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  return (
    <div className="App">
      <h1>#todo</h1>
      <main>
        <Tabs currentTab={currentTab} setcurrentTab={setcurrentTab} />
        <hr className="horizontal-line" />
        <div className="add-items">
          <input placeholder="add details" name="task" value={title} onChange={onTextChange} />
          <button onClick={AddTask}>Add</button>
        </div>
        <Item tasks={tasks} CompleteTask={CompleteTask} currentTab={currentTab} />
      </main>
    </div >
  );
}

export default App;
