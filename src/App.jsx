import { Outlet } from 'react-router-dom'
import ScrollToAnchor from './components/ScrollToAnchor.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import lakePhoto from './images/gallery/lake.jpg'
import waterfallPhoto from './images/gallery/waterfall1.jpg'
import viewPhoto from './images/gallery/valleyview.jpg'
import './App.css'

function App() {
  return (
    <div className="flex min-h-dvh flex-col justify-center">
      <Header />
      <ScrollToAnchor />
      <img
        src={waterfallPhoto}
        alt="Waterfall background image"
        className="fixed left-0 top-0 -z-10 h-dvh w-dvw object-cover"
      />
      <Outlet />
      <div className="grow"></div>
      <Footer />
    </div>
  )
}

export default App
