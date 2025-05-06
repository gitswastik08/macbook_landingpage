import "remixicon/fonts/remixicon.css";
import React, { useEffect } from "react";
import "./style.css";
import Lenis from "@studio-freight/lenis/types";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { div } from "three/tsl";
import Secondpage from "./pages/Secondpage";
import Thirdpage from "./pages/Thirdpage";
import Fourthpage from "./pages/Fourthpage";
import Fifthpage from "./pages/Fifthpage";
import Footer from "./pages/footer";
import Sixthpage from "./pages/Sixthpage";
const App = () => {
 

  return (
    <div className="w-full h-full">
      <Navbar />
      <Homepage />  
      <Secondpage />
      <Thirdpage/>
      <Fourthpage/>
      <Fifthpage/>
      <Sixthpage/>
      <Footer/>
    </div>
  );
};

export default App;
