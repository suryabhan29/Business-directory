//Import area

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './component/ui/Layout'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

// Defination area
export default function App() {

    //2.1 Hooks area

    //2.2 defination area

    //2.3 Return statement
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home />}></Route>
                <Route path='detail' element={<Detail />}></Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

// export area
