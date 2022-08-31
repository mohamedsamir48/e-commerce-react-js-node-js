import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login'
import ProductPage from './pages/product/ProductPage';
import CartPage from './pages/Cart/CartPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/shop' element={<Shop/>}/>
          <Route exact path='/cart' element={<CartPage/>}/>
          <Route exact path='/shop/:categroy' element={<Shop/>}/>
          <Route exact path='/Products/:id' element={<ProductPage/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
