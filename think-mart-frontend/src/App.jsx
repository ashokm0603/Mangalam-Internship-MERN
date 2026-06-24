import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import AddProducts from './pages/AddProducts';
import Products from './pages/Products';
import UserPage from './pages/UserPage';
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>

    <nav>
      <Link to="/">ADD Users</Link>
      <Link to="/users">View Users</Link>
      <Link to="/add-product">ADD Products</Link>
      <Link to="/view-products">View Products</Link>
    </nav>

        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/users' element={<UserPage/>}/>
          <Route path='/add-product' element={<AddProducts/>}/>
          <Route path='/view-products' element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
