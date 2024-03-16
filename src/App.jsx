import Home from "./pages";
import lakePhoto from "./images/gallery/lake.jpg"
import waterfallPhoto from "./images/gallery/waterfall1.jpg"
import viewPhoto from "./images/gallery/valleyview.jpg"
import "./App.css";

function App() {
  return (
    <div>
      <img src={waterfallPhoto} alt="Waterfall background image" className="fixed top-0 left-0 -z-10 object-cover h-dvh w-dvw" />
      <Home />
    </div>
  )
}

export default App;
