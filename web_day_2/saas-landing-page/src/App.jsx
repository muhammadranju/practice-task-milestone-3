import Events from "./components/Events";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
import TakeReady from "./components/TakeReady";
import UsedIndustry from "./components/UsedIndustry";
import Compared from "./components/Compared";
import InTouch from "./components/InTouch";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <UsedIndustry />
      <Events />
      <TakeReady />
      <Compared />
      <InTouch />
    </>
  );
}

export default App;
