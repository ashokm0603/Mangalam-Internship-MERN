import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Products from "./pages/Products";
import EditProducts from "./pages/EditProducts";
import DeleteProducts from "./pages/DeleteProducts";
import AddProducts from "./pages/AddProducts";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/view-products" element={<Products/>}/>
          <Route path="/edit-products" element={<EditProducts/>}/>
          <Route path="/delete-products" element={<DeleteProducts/>}/>
          <Route path="/add-products" element={<AddProducts/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;