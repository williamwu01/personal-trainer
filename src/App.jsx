import './App.css'
import './styles/organisms/pt-background.css'
import Hero from './components/Hero';
import { ThemeProvider } from './context/LanguageContext';
import Header from './components/Header';
import About from './components/About';
import Training from './components/Training';
import Booknow from './components/Booknow';
import Pricing from './components/Pricing';
import Socials from './components/Socials';
import Hamburger from './components/Hamburger';

function App() {

  return (
    <div>
      <ThemeProvider>
				{/* <Hamburger /> */}
        <Header />
        <Hero />
        <About />
        <Training />
        <Booknow />
				{/* <Pricing />
				<Socials /> */}
      </ThemeProvider>
    </div>
  )
}

export default App
