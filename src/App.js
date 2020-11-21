import React from "react";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [city, setCity] = useState(null);
  const [isCelcius, setIsCelcius] = useState(false);

  useEffect(() => {
    console.log(city);
  }, [city]);

  return (
    <div className="App">
      <Navbar setCity={setCity} />
      <Body city={city} isCelcius={isCelcius} setIsCelcius={setIsCelcius} />
      <Footer />
    </div>
  );
}

export default App;
