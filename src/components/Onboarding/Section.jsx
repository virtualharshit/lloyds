import React, { useState } from "react";
import Task from "./Task";

const Section = ({ sublist, onTaskToggle }) => {
  const completedTasks = sublist.tasks.filter((task) => task.completed).length;
  const progress = (completedTasks / sublist.tasks.length) * 100;

  return (
    // <div>
    //   <h3>{sublist.name}</h3>
    //   <div>
    //     <div style={{ width: "100%", backgroundColor: "#e0e0df" }}>
    //       <div style={{ width: `${progress}%`, backgroundColor: "#76c7c0" }}>
    //         {progress.toFixed(2)}%
    //       </div>
    //     </div>
    //   </div>
    //   {sublist.tasks.map((task) => (
    //     <Task key={task.id} task={task} onToggle={onTaskToggle} />
    //   ))}
    // </div>
    <section className="checklist">
      <div className="flex">
        <span
          className="dot_accounts"
          style={{ backgroundColor: sublist.style }}
        ></span>
        <h2 className="checklist__title">{sublist.name}</h2>
      </div>
      <span className="checklist__title-border"></span>
      <span
        className="checklist__percentage-border"
        style={{ width: `${progress}%` }}
      ></span>
      <ul className="checklist-container">
        {sublist.tasks.map((task) => (
          <Task
            key={`${sublist.id}${task.id}`}
            sublist={sublist}
            task={task}
            onToggle={onTaskToggle}
          />
        ))}
      </ul>
    </section>
  );
};

export default Section;
