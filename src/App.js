
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Share/Footer/Footer';
import Login from './Pages/Share/Login/Login';
import SignUp from './Pages/Share/Login/SignUp';
import Purchase from './Pages/Home/Service/Purchase';
import Navbar from './Pages/Share/Navbar/Navbar';
import { ToastContainer} from 'react-toastify';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Dashboard from './Dashboard/Dashboard';
import MyProfile from './Dashboard/MyProfile/MyProfile';
import AddReview from './Dashboard/AddReview/AddReview';
import Myorders from './Dashboard/Myorders/Myorders';
import Makeadmin from './Dashboard/Makeadmin';
// import MakeAdmin from './Dashboard/MakeAdmin/MakeAdmin';




function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
 <Navbar></Navbar>

<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='home' element={<Home></Home>}></Route>
<Route path='dashbord' element={<RequireAuth><Dashboard/> </RequireAuth> }>

<Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
<Route path='addreview' element={<AddReview></AddReview>}></Route>
<Route path='myorders' element={<Myorders></Myorders>}></Route>
<Route path='makeadmin' element={<Makeadmin></Makeadmin>}></Route>


</Route>
<Route path="Purchase/:serviceId" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
{/* <Route path="Payment/:id" element={<Payment></Payment>}></Route> */}
<Route path='signUp' element={<SignUp></SignUp>}></Route>
<Route path='Login' element={<Login></Login>}></Route>

</Routes>

<Footer></Footer>
<ToastContainer />

    </div>
  );
}

export default App;
