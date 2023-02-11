import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <nav className={s.menu}>
        <Link to = "/"  className={s.link}>Main</Link>
        <Link to = "/frontend" className={s.link}>Frontend</Link>
        <Link className={s.link}>Backend</Link>
        <Link className={s.link}>Linux</Link>
        <Link className={s.link}>SQL/Mongo DB</Link>
      </nav>
    </div>
  );
}
