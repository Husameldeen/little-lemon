import "./App.css";
import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HighlightsSection />
    </div>
  );
}

export default App;
