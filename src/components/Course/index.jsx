import React from "react";
import s from "./style.module.css";
import {Link} from 'react-router-dom'

export default function Course({id, part, tasks }) {
  return (
    <div className={s.part}>
      <h3>
        <div className={s.course}><Link to={`/frontend/${id}`}>{part}</Link></div>
      </h3>
      <p>TASKS: {tasks}</p>
    </div>
  );
}
