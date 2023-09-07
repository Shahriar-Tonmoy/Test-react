import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='border border-red-500 flex flex-col items-center'>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          add
        </button>
        <button onClick={() => setCount((count) => count - 2)}>
          minus
        </button>
        {count}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Mobile name="samsung" price={[1,2,3]}></Mobile>
      <Mobile name="iPhone" price="100000"></Mobile>
      <Mobile name="iPhone" price='800000'></Mobile>
      <Mobile name="iPhone" price='800000'></Mobile>
      <Mobile name="iPhone" price='800000'></Mobile>
      <Mobile name="iPhone" price='800000'></Mobile>
      <Mobile name="iPhone" price='800000'></Mobile>
      <Mobile name="iPhone" price='800000'></Mobile>
    </div>
  )
}


function Mobile({name, price}){
    const my_price = Array.isArray(price)? price[0] : price;
    return <h1 className='text-6xl font-bold text-orange-400'>{name} {my_price}</h1> 
}

export default App
