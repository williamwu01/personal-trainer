import './App.css'
import './styles/organisms/pt-background.css'
import Hero from './components/Hero';
import { ThemeProvider } from './context/LanguageContext';
import Header from './components/Header';
import About from './components/About';
import Training from './components/Training';
<<<<<<< Updated upstream
import Booknow from './components/Booknow';
=======
import Pricing from './components/Pricing';
>>>>>>> Stashed changes

function App() {

  return (
    <div>
      <ThemeProvider>
        <Header />
        <Hero />
        <About />
        <Training />
<<<<<<< Updated upstream
        <Booknow />
=======
				<Pricing />
>>>>>>> Stashed changes
      </ThemeProvider>
    </div>
  )
}

export default App
