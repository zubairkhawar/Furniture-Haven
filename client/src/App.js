import './App.css';
import Hero from './components/hero.js';
import Footer from './components/footer.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white h-screen">
     <BrowserRouter>
      <Hero />
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/products' element={<h1>Products</h1>}/>
        <Route path='/contact' element={<h1>Logout</h1>}/>
        <Route path='/profile' element={<h1>Profile</h1>}/>
      </Routes>
      <Footer/>
    
     </BrowserRouter>

    </div>
  );
}

export default App;
