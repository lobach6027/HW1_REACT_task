import React from 'react'
import s from './style.module.css'


export default function Header(props) {
  return (
    <div className={s.namesCourse}>
       <h1>{props.course}</h1>
    </div>
  )
}
