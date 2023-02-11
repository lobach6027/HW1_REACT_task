import React from "react";
import s from "./style.module.css";


export default function Course({ part, tasks }) {
  return (
    <div className={s.part}>
      <h3>{part}</h3>
      <p>TASKS: {tasks}</p>
    </div>
  );
}
