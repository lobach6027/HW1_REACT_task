import { useEffect, useState } from "react";
import axios from 'axios'
import Course from "../Course";
import Count from "../Count";
import s from './style.module.css'


const fetchParts = () =>{
  return axios.get('http://localhost:3001/parts')
 }
function Frontend() {
const [parts,setParts] = useState([])

useEffect(()=>{
  fetchParts()
  .then(res=>{
    setParts(res.data)
  })
},[])

  return (
    <div className={s.wrapper}>
      <h1>Frontend</h1>
      <div className={s.tasks}>
      {parts.map((part)=><Course key = {part.id} {...part}/>)}
      </div>
      <Count parts = {parts}/> 
    </div>
  );
}

export default Frontend;
