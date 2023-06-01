import { Route, Routes } from "react-router-dom"
import Home from './Components/Home';
// import { Classes } from './Components/Classes';
// import { Tuition } from './Components/Tuition';
// import { Contact } from './Components/Contact';
import Navbar from './Components/Navbar';
// import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/Classes' element={<Classes />} /> */}
          {/* <Route path='/Tuition' element={<Tuition />} /> */}
          {/* <Route path='/Contact' element={<Contact />} /> */}
        </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;