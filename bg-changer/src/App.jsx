import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='bg-white fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded-3xl m-5'>
          <button className='bg-blue-500 text-white p-2 rounded-3xl m-2'
          onClick={() => setColor('blue')}>Blue</button>
          <button className='bg-green-500 text-white p-2 rounded-3xl m-2'
          onClick={() => setColor('green')}>Green</button>
          <button className='bg-red-500 text-white p-2 rounded-3xl m-2'
          onClick={() => setColor('red')}>Red</button>

        </div>
      </div>
    </>
  )
}

export default App
