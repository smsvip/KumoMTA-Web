import { LanguageProvider } from './i18n';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import TechStack from './components/TechStack'
import GettingStarted from './components/GettingStarted'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Features />
        <TechStack />
        <GettingStarted />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
