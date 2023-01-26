import React from 'react'
import s from './style.module.css'
export default function Course(props) {
  return (
    <div className={s.part}>
        <p>PART: {props.part}</p>
        <p>TASKS: {props.tasks}</p>
    </div>
  )
}
