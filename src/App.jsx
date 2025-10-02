import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-blue-500 text-white p-6 rounded-lg">
      <h1 className="text-3xl font-bold">¡Tailwind funciona! 🚀</h1>
      <h2 className='bg-amber-300 text-amber-950'>Estoy orgulloso de haber llegado a una solucion</h2>
    </div>
    </>
  )
}

export default App
