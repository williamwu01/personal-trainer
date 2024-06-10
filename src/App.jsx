import './App.css'
import './styles/organisms/pt-background.css'
import Hero from './components/Hero';
import { ThemeProvider } from './context/LanguageContext';
import Header from './components/Header';
import About from './components/About';
import Training from './components/Training';
import Booknow from './components/Booknow';

function App() {

  return (
    <div>
      <ThemeProvider>
        <Header />
        <Hero />
        <About />
        <Training />
        <Booknow />
      </ThemeProvider>
    </div>
  )
}

export default App
