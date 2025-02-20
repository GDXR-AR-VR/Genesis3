import { useState } from "react";
import About from "./pages/about";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Prizes from "./pages/prizes";
import Navbar from "./components/navbar";
import Sponsors from "./pages/sponsors";
import HomeMobile from "./pages/homeMobile";
import AboutMobile from "./pages/aboutMobile";
import Memories from "./pages/memories";
import Faqs from "./pages/faqs";
import Footer from "./pages/footer";
import Timeline from "./pages/timeline";
import PrizesMobile from "./pages/prizesMobile";
import TimelineMobile from "./pages/timelineMobile";
import SponsorsMobile from "./pages/sponsorsMobile";
import FooterMobile from "./pages/footerMobile";
import { Suspense } from "react";
import SponsorUs from "./pages/sponsorUs";
import Memories_Phone from "./pages/memories-phone";
import SponsorStatement from "./pages/sponsorStatement";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useState(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <>
      <div className="flex-col">
        <BrowserRouter>
          <Routes>
            <Route path="/sponsorus" element={<SponsorUs />} />
            <Route
              path="/"
              element={
                <>
                  {width >= 800 && <Navbar />}
                  {width >= 800 ? (
                    <>
                      <Home />
                      <Suspense fallback={Home}>
                        <About />
                        <Prizes />
                        <Timeline />
                        {/* <Sponsors /> */}
                        <SponsorStatement />
                        <Memories />
                        <Faqs />
                        <Footer />
                      </Suspense>
                    </>
                  ) : (
                    <>
                      <HomeMobile />
                      <Suspense fallback={HomeMobile}>
                        <AboutMobile />
                        <PrizesMobile />
                        <TimelineMobile />
                        {/* <SponsorsMobile /> */}
                        <SponsorStatement />
                        <Memories_Phone />
                        <Faqs />
                        <FooterMobile />
                      </Suspense>
                    </>
                  )}
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
