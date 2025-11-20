import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Testimonials />
        <Stats />
        <About />
        <Gallery />
        <Pricing />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App