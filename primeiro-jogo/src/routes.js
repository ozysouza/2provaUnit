import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Editar'
import Home from './pages/Lista'
import Login from './pages/Login'
import Login from './pages/Novo'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/editar" element={<Editar />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/login" element={<Login />} />
        <Route path="/novo" element={<Novo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default