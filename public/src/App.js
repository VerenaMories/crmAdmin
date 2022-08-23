import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import Pricing from './pages/Pricing/Pricing';
import Blog from './pages/Blog/Blog';

function App() {
  return (
   <>
   <Navbar/>
<Routes>
  <Route path='/home' element={<Home/>} />
  <Route path='/features' element={<Features/>} />
  <Route path='/pricing' element={<Pricing/>} />
  <Route path='/blog' element={<Blog/>} />

</Routes>
<MainPage/>

   <Footer/>
   </>
  );
}

export default App;
