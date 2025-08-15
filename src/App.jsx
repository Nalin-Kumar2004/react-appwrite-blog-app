import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    // Copilot: Sticky footer layout - flex-col, min-h-screen, main grows to fill space
    // Removed: old nested flex-wrap/content-between layout that caused extra space below footer
    // Added: flex-col, min-h-screen, and flex-1 on main to ensure footer always sits at the bottom
    <div className='min-h-screen flex flex-col bg-gray-400'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null
}

export default App