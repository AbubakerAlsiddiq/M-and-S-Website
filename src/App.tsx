import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";
import Inventory from "./components/Inventory";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/components/About" element={<About />}></Route>
            <Route path="/components/Inventory" element={<Inventory />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
