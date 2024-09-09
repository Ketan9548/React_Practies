import Header from './Components/header/Header'
import Footer from './Components/footer/Footer'
import Main from './Components/main/Main'
import { Route, Routes } from 'react-router-dom'
import About from './Components/about/About'
import Services from './Components/Service/Service'
import Contact from './Components/Contect/Contact'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
