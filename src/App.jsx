import Table from './components/Table'
import Navbar from './components/Navbar'
import { useState } from 'react'
import UserInputProvider from './components/UserInputProvider'

function App() {

  return (
    <UserInputProvider>
      <div className='bg-gray-200 overflow-y-hidden h-[100vh] '>
      <Navbar  />
      <Table />
      </div>

    </UserInputProvider>
    
  )
}

export default App
