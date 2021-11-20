import React, { useState } from 'react';
import './App.css';
import Item from './components/Item';
import Tabs from './components/Tabs';

function App() {
  const [currentTab, setcurrentTab] = useState("all");
  return (
    <div className="App">
      <h1>#todo</h1>
      <main>
        <Tabs currentTab={currentTab} setcurrentTab={setcurrentTab} />
        <hr className="horizontal-line" />
        <div class="add-items">
          <input placeholder="add details" name="todo" />
          <button>Add</button>
        </div>
        <Item />
      </main>
    </div >
  );
}

export default App;
