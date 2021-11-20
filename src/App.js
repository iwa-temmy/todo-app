import './App.css';

function App() {
  return (
    <div className="App">
      <h1>#todo</h1>
      <main>
        <div className="tabs">
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <hr />
        <div class="add-items">
          <input placeholder="add details" name="todo" />
          <button>Add</button>
        </div>
        <div className="item">
          <input type="checkbox" />
          <span>Do Coding challenges</span>
        </div>
      </main>
    </div >
  );
}

export default App;
