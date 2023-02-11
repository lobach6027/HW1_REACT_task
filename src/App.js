import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Frontend from './components/Frontend/Frontend'
import Header from './components/Header'
import Main from './components/Main/Main'

export default function App() {
  return (
    <div>
      <Header />
        <Routes>
           <Route element = {<Main/>} path = '/'/>
           <Route element = {<Frontend />} path = '/frontend'/>
        </Routes>
    </div>
  )
}
