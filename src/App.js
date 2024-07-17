
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory category="mens"/>}></Route>
        <Route path='/womens' element={<ShopCategory category="womens"/>}></Route>
        <Route path='/kids' element={<ShopCategory category="kids"/>}></Route>
        <Route path='product' element={<Product/>}>
          <Route path=':product:Id' element{<}


        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
