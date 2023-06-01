import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Cart from './Cart';
import Contact from './Contact';
import SingleProduct from './SingleProduct';
import ErrorPage from './ErrorPage';
import Header from './component/Header';
import Footer from './component/Footer';


function App() {
  return (
   <div>
<BrowserRouter>
<Header/>


<Routes>
<Route path='/' element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='products' element={<Products/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='cart' element={<Cart/>}/>
<Route path='singleproduct' element={<SingleProduct/>}/>
<Route path='*' element={<ErrorPage/>}/>

</Routes>
<Footer/>
</BrowserRouter>
   </div>
  );
}

export default App;
