import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import BuyNow from './Pages/BuyNow/BuyNow';
import AddNewProduct from './Pages/Dashboard/AddNewProduct/AddNewProduct';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import HomeDashboard from './Pages/Dashboard/HomeDashboard/HomeDashboard';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Review from './Pages/Dashboard/Review/Review';
import Users from './Pages/Dashboard/Users/Users';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAdmin from './Pages/Login/RequireAdmin/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Portfolio from './Pages/Portfolio/Portfolio';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/buyNow/:productId" element={
          <RequireAuth>
            <BuyNow />
          </RequireAuth>
        } />
        <Route path="/dashboard" element={<RequireAuth> <Dashboard /></RequireAuth>} >
          <Route index element={<HomeDashboard></HomeDashboard>}></Route>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="addProduct" element={<AddNewProduct></AddNewProduct>}></Route>
          <Route path="manageAllOrders" element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path="manageProducts" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
