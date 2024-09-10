import Header from './Components/header/Header'
import Footer from './Components/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
