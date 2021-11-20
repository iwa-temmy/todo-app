import React from 'react';

const Tabs = props => {
  const { currentTab, setcurrentTab } = props;
  return (
    <div className="tabs">
      <span className={currentTab === "all" ? "active" : ""} onClick={() => setcurrentTab("all")}>All</span>
      <span className={currentTab === "active" ? "active" : ""} onClick={() => setcurrentTab("active")}>Active</span>
      <span className={currentTab === "completed" ? "active" : ""} onClick={() => setcurrentTab("completed")}>Completed</span>
    </div>
  )
}

export default Tabs;
