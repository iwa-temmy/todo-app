import './App.css';
import Item from './components/Item';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <h1>#todo</h1>
      <main>
        <Tabs />
        <hr />
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
