import React from 'react'

const Item = (props) => {
  const {tasks, CompleteTask, currentTab } = props
  const activeTasks = tasks?.filter(task => task?.state === 'active');
  const completedTasks = tasks?.filter(task => task.state === 'completed')
  console.log('active', activeTasks);
  return (
    <>
    {currentTab === 'all' ? (<>{tasks?.map((task, index) => (
    <div className="item" key={index}>
      <input type="checkbox" onChange={() => CompleteTask(index)} checked={task.state === 'completed' ? true : false}/>
      <span style={{textDecoration: task?.state === "completed" ? 'line-through' : 'none'}}>{task?.title}</span>
    </div>
    ))}</>) : currentTab === 'active' ? (<> {activeTasks?.map((task, index) => (<div className="item" key={index}>
      <input type="checkbox" onChange={() => CompleteTask(index)} checked={task?.state === 'completed' ? true : false}/>
      <span style={{textDecoration: task?.state === "completed" ? 'line-through' : 'none'}}>{task?.title}</span>
    </div>))} </>) : currentTab === 'completed' ? (<>{completedTasks?.map((task, index) => (<div className="item" key={index}>
      <input type="checkbox" onChange={() => CompleteTask(index)} checked={task?.state === 'completed' ? true : false}/>
      <span style={{textDecoration: task?.state === "completed" ? 'line-through' : 'none'}}>{task?.title}</span>
    </div>))}</>) : ""}
    </>
  )
}

export default Item;
