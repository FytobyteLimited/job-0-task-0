import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='w-full relative bg-white flex flex-col items-center justify-start pt-[29px] pb-[41.5px] pr-5 pl-[21px] box-border gap-[50px]'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
