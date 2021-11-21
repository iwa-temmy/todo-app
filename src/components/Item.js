import React from 'react';
import * as MdIcons from 'react-icons/md';

const Item = (props) => {
  const { tasks, CompleteTask, currentTab, DeleteTask, deleteAllTasks } = props
  const activeTasks = tasks?.filter(task => task?.state === 'active');
  const completedTasks = tasks?.filter(task => task.state === 'completed')
  console.log('active', activeTasks);
  return (
    <>
      {currentTab === 'all' ? (<>{tasks?.map((task, index) => (
        <div className="item" key={index}>
          <input type="checkbox" onChange={() => CompleteTask(index)} checked={task.state === 'completed' ? true : false} />
          <span style={{ textDecoration: task?.state === "completed" ? 'line-through' : 'none' }}>{task?.title}</span>
        </div>
      ))}</>) : currentTab === 'active' ? (<> {activeTasks?.map((task, index) => (<div className="item" key={index}>
        <input type="checkbox" onChange={() => CompleteTask(index)} checked={task?.state === 'completed' ? true : false} />
        <span style={{ textDecoration: task?.state === "completed" ? 'line-through' : 'none' }}>{task?.title}</span>
      </div>))} </>) : currentTab === 'completed' ? (
        <>
          {completedTasks?.map((task, index) => (
            <div key={index}>
              <div className="item-completed">
                <div>
                  <input type="checkbox" onChange={() => CompleteTask(index)} checked={task?.state === 'completed' ? true : false} />
                  <span style={{ textDecoration: task?.state === "completed" ? 'line-through' : 'none' }}>{task?.title}</span>
                </div>
                <span onClick={DeleteTask} className="delete"><MdIcons.MdOutlineDeleteOutline /></span>
              </div>
              <div className="delete-all">
                <button onClick={deleteAllTasks}><MdIcons.MdOutlineDeleteOutline /> delete all</button>
              </div>
            </div>
          ))}
        </>)
        :
        ""}
    </>
  )
}

export default Item;
