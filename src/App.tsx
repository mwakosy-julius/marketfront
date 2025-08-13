import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Logos */}
      <div className="flex space-x-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-20 w-20 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-20 w-20 hover:scale-110 transition-transform" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Vite + React + Tailwind</h1>

      {/* Card */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-6 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-400">
          Edit <code className="bg-gray-700 px-1 py-0.5 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-sm text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
