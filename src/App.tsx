// import './App.css'
import { useEffect, useState } from 'react'
import './index.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Project from './components/Project'
import Divider from './components/Divider'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className='relative min-h-screen bg-linear-to-b from-dark-blue/10 via-white to-white'>
      <div
        className={`sticky top-0 z-10 transition-colors duration-300 ${
          isScrolled ? 'bg-transparent shadow-md' : 'bg-white'
        }`}
      >
        <Header />
      </div>
      <Profile />
      <Divider />
      <Project />
      <Footer />
    </main>
  )
}

export default App
