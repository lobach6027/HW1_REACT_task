import React, { useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import axios from 'axios'

const fetchCourse  = id => {
    return axios.get(` http://localhost:3001/parts/${id}`)
}


export default function SingleNotePage() {
   const{id} =  useParams()
  const[course,setCourse] = useState({})
   useEffect(()=>{
    fetchCourse(id)
    .then(res=>setCourse(res.data))
    .catch(err=>console.log(err))
   },[id])


  return (
    <div>
      <h1>{course.part}</h1>
      <p>{course.category}</p>
      <p>{course.tasks}</p>
    </div>
  );
}
