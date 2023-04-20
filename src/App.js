import React from "react";
import Navbar from "./components/Navbar";
import TwoCol from "./components/TwoCol";
import SecondCol from "./components/SecondCol";
import Feedback from "./components/Feedback";
import Footer from "./components/footer";
import Scrollcourses from "./components/Scrollcourses";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <TwoCol />
      <Scrollcourses/>
      <SecondCol />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
