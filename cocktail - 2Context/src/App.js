import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Navbar from "./components/Navbar";

// Api
function App() {
  return <div>
    <Navbar />
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/about" element = {<About />}/>
      <Route path="cocktail/:id" element = {<SingleCocktail />}/>
    </Routes>
  </div>;
}

export default App;
