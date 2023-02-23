import React from "react";
import s from "./style.module.css";
export default function Count({ parts }) {
  return (
    <div className={s.result}>
      Full number of tasks: {parts.reduce((prev, item) => prev + Number(item.tasks), 0)}
    </div>
  );
}
