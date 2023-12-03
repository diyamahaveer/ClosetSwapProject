import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import LoginIntro from './Pages/LoginIntro';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Products from './Components/Products/Products';
import Tile from './Components/Tile/Tile';
import MyFavorites from './Pages/MyFavorites';
import './Components/Tile/Tile';
import banner_one from './Components/Assets/banner_one.jpg'

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path = '/'element={<Products/>}/>
          <Route path = '/'element={<Shop/>}/>
          <Route path = '/menswear'element={<ShopCategory banner = {banner_one} category = "mens"/>}/>
          <Route path = '/womenswear'element={<ShopCategory banner = {banner_one} category = "womens"/>}/>
          <Route path = '/accessories'element={<ShopCategory banner = {banner_one} category = "accessories"/>}/>
          <Route path = '/specialevents'element={<ShopCategory banner = {banner_one} category = "specialevents"/>}/>
          {/* <Route path = "/product" element = {<Product/>}>
            <Route path = ':productID' element = {<Product/>}/>
          </Route> */}
          <Route path = '/cart' element = {<Cart/>}/>
          <Route path = '/myfavorites' element = {<MyFavorites/>}/>
          <Route path = '/loginintro' element = {<LoginIntro/>}/>
          <Route path = '/loginsignup' element = {<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
