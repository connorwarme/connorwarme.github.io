import { Outlet } from 'react-router-dom'
import ScrollToAnchor from './components/ScrollToAnchor'
import lakePhoto from './images/gallery/lake.jpg'
import waterfallPhoto from './images/gallery/waterfall1.jpg'
import viewPhoto from './images/gallery/valleyview.jpg'
import './App.css'

function App() {
  return (
    <div>
      <ScrollToAnchor />
      <img
        src={waterfallPhoto}
        alt="Waterfall background image"
        className="fixed left-0 top-0 -z-10 h-dvh w-dvw object-cover"
      />
      <Outlet />
    </div>
  )
}

export default App
