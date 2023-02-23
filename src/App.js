import React from "react";
import { Routes, Route } from "react-router-dom";
import Frontend from "./components/Frontend/Frontend";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import AddNewCourse from "./pages/SingleNotePage/AddNewCourse/AddNewCourse";
import SingleNotePage from "./pages/SingleNotePage/SingleNotePage";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Frontend />} path="/frontend" />
        <Route element={<SingleNotePage />} path="/frontend/:id" />
        <Route  element = {<AddNewCourse />} path = "/frontend/addnote"/>
      </Routes>
    </div>
  );
}
