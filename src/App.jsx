import Table from './components/Table'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className='bg-gray-200 overflow-y-hidden h-[100vh] '>
    <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <Table searchTerm={searchTerm}/>
    </div>
  )
}

export default App
