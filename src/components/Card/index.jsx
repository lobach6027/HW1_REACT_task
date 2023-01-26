import React from "react";
import { lessonCourse } from "../App";
import Course from "../Course";



export default function Card() {
  return <div>
    {lessonCourse.map(item=><Course key = {item.id} {...item}/>)}
  </div>;
}