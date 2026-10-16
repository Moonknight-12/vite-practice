import './App.css'
import spaceship from './images/Spaceship.jpg'

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center gap-8 p-6">
      <h1 className="text-4xl font-bold">Welcome to space!!!!</h1>
      <img src={spaceship} alt="Spaceship" className="w-full max-w-4xl rounded-lg shadow-lg" />
    </div>
  )
}

export default App