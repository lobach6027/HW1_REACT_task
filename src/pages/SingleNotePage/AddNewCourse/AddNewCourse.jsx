import axios from "axios";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./style.module.css"

export default function AddNewCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addCourse = (data) => {
    return axios.post("http://localhost:3001/parts", data);
  };
  const submit = (e) => {
    e.preventDefault();
    const newCourse = {
      category: "FrontEnd",
      part: title,
      description: description,
      tasks: amount,
    };
    addCourse(newCourse)
      .then((resp) => {
        console.log(resp);
        setTitle("");
        setDescription("");
        setAmount("");
        toast("Done");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={s.wrapper}>
      <h2>Create new course</h2>
      <form className={s.form} onSubmit={submit}>
        <input
        className={s.textInput}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title..."
          required
        />
        <input
         className={s.textInput}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description..."
          required
        />
        <input
         className={s.textInput}
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount of clases ..."
          required
        />
        <input  className={s.subInput} type="submit" value="Add new course" />
      </form>
      <ToastContainer theme="light" />
    </div>
  );
}
