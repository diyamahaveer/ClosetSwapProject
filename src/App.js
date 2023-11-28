import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path = '/'element={<Shop/>}/>
          <Route path = '/menswear'element={<ShopCategory category = "mens"/>}/>
          <Route path = '/womenswear'element={<ShopCategory category = "womens"/>}/>
          <Route path = '/accessories'element={<ShopCategory category = "accessories"/>}/>
          <Route path = '/specialevents'element={<ShopCategory category = "specialevents"/>}/>
          <Route path = "/product" element = {<Product/>}>
            <Route path = ':productID' element = {<Product/>}/>
          </Route>
          <Route path = '/cart' element = {<Cart/>}/>
          <Route path = '/signup' element = {<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
