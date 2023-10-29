import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Header from './components/Header'
import Footer from './components/Footer'
import OurEcolodge from './pages/OurEcolodge/OurEcolodge'
import IquitosPeru from './pages/IquitosPeru/IquitosPeru'
import Testimonials from './pages/Testimonials/Testimonials'
import Contact from './pages/Contact/Contact'
import Faq from './pages/Faq/Faq'
import Programs from './pages/Programs/Programs'

function App() {

  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/Ecolodge' element={<OurEcolodge />} />
          <Route exact path='/IquitosPeru' element={<IquitosPeru />} />
          <Route exact path='/Testimonials' element={<Testimonials />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/Faq' element={<Faq />} />
          <Route exact path='/Programs' element={<Programs />} />
        </Routes>
      </Router>
      <Footer />
      {/* <h1 className='bg-slate-600'>dasjld</h1> */}
    </>
  )
}

export default App
