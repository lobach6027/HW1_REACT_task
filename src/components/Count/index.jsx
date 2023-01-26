import React from 'react'
import { lessonCourse } from '../App'
import s from './style.module.css'
export default function Count() {
  return (
    <div className={s.result}>
        Full number of tasks: {lessonCourse.reduce((prev,item)=> prev+item.tasks,0)}
    </div>
  )
}
