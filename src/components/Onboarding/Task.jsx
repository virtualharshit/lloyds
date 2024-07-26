import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Task = ({ sublist, task, onToggle }) => {
  const [isopen, setisopen] = useState(false);

  return (
    <li className="checklist-item">
      <input
        id={`checkbox${sublist.id}${task.id}`}
        type="checkbox"
        checked={task.completed}
        className="checkbox #existingboolean"
        onChange={() => onToggle(task.id)}
      />
      <label
        htmlFor={`checkbox${sublist.id}${task.id}`}
        className="checkbox #existing"
      ></label>
      <span
        className="checklist-item__title"
        onClick={() => setisopen(!isopen)}
      >
        {task.title}
      </span>
      <button
        className="checklist-item__expand"
        aria-label="Toggle Info"
        title="Toggle More Information"
        onClick={() => setisopen(!isopen)}
      >
        {isopen ? (
          <FaMinus className="text-xl" />
        ) : (
          <FaPlus className="text-xl" />
        )}
        {/* <span className="line"></span> */}
      </button>

      <div className={`info-container ${isopen ? "" : "info-container_close"}`}>
        <div className="info">
          <ul className="flex flex-col gap-2">
            {task.body.map((obj, i) =>
              obj?.link ? (
                <li key={i}>
                  <a href={obj.link} target="_blank">
                    {obj.text}
                  </a>
                </li>
              ) : (
                <div key={i}>{obj.text}</div>
              )
            )}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Task;
