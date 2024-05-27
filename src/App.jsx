import { useState } from 'react'
import './App.css'
import './styles/organisms/pt-background.css'
import Hero from './components/Hero';
import translationData from "./data/translation.json";
import { ThemeProvider } from './context/LanguageContext';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ThemeProvider>
        <Header />
        <Hero />
      </ThemeProvider>
    </div>
  )
}

export default App
