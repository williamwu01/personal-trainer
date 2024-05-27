import './App.css'
import './styles/organisms/pt-background.css'
import Hero from './components/Hero';
import { ThemeProvider } from './context/LanguageContext';
import Header from './components/Header';
import About from './components/About';
import Training from './components/Training';

function App() {

  return (
    <div>
      <ThemeProvider>
        <Header />
        <Hero />
        <About />
        <Training />
      </ThemeProvider>
    </div>
  )
}

export default App
