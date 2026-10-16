import './App.css'
import spaceship from './images/Spaceship.jpg'

function App() {
  return (
    <div className="bg-blue-700 text-white h-screen flex flex-col items-center justify-center gap-6">
      <p>こんにちは！Webサイトを更新しました！</p>
      <img src={spaceship} alt="Spaceship" className="w-80 rounded-lg shadow-lg" />
    </div>
  )
}

export default App