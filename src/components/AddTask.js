import React from 'react'

const AddTask = (props) => {
  const { title, onTextChange, AddTask, currentTab } = props;
  return (
    <>
      {currentTab === 'all' || currentTab === 'active' ? (<form onSubmit={(e) => AddTask(e)} className="add-items">
        <input placeholder="add details" name="task" value={title} required onChange={onTextChange} />
        <button type="submit">Add</button>
      </form>) : ""}
    </>
  )
}

export default AddTask
