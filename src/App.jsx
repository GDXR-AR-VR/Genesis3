import { useState } from "react";
import About from "./pages/about";
import "./App.css";
import Home from "./pages/home";
import Prizes from "./pages/prizes";
import Navbar from "./components/navbar";
import Sponsors from "./pages/sponsors";
import HomeMobile from "./pages/homeMobile";
import AboutMobile from "./pages/aboutMobile";
import Faqs from "./pages/faqs";
import Footer from "./pages/footer";
import Timeline from "./pages/timeline";
import PrizesMobile from "./pages/prizesMobile";
import TimelineMobile from "./pages/timelineMobile";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useState(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <>
      <div className="flex-col">
        {width >= 800 && <Navbar />}
        {width >= 800 ? (
          <>
            <Home />
            <About />
            <Prizes />
            <Timeline />
            <Sponsors />
            <Faqs />
            <Footer />
          </>
        ) : (
          <>
            <HomeMobile />
            <AboutMobile />
            <PrizesMobile />
            <TimelineMobile />
          </>
        )}

        <div></div>
      </div>
    </>
  );
}

export default App;
