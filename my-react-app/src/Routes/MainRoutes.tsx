import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/:city' element={<Home />} />
    </Routes>
  )
}
