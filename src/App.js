import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Experinces from "./components/Experinces";
const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  borderColor: "red",
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center bg-[#00040f]">
          <HashLoader
            color="#0891b2"
            loading={loading}
            cssOverride={override}
            size={90}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
            <div>
              <NavBar />
              <Home />
              <About/>
              <Experinces/>
              <Skills />
              <Project />
              <Education/>
              <Contact/>
            </div>
        </div>
      )}
    </>
  );
};
export default App;
