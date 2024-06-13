import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import ProductDetail from './Pages/ProductDetail';
import { useDispatch } from 'react-redux';
import supabase from './supabase';
import { useEffect } from 'react';
import { setUser } from './Slices/userSlice';

export default function App() {

  const dispatch = useDispatch();

  const getUser = async()=>{
    const {data,error} = await supabase.auth.getSession();
    dispatch(setUser(data.session.user));
  }

  useEffect(() => {
    getUser();
  }, []);
  

  return <div>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/ProductDetail/:id' element={<ProductDetail/>}/>
    </Routes>
    <Footer/>
  </Router>
  </div>
}