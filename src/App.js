
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
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
import Myorders from './Dashboard/Myorders/Myorders';
import Makeadmin from './Dashboard/Makeadmin';
import MyProfile from './Dashboard/MyProfile';
import Allusers from './Dashboard/Allusers';
import AddProduct from './Dashboard/AddProduct';
import ManageProducts from './Dashboard/ManageProducts';
import ManageOrdders from './Dashboard/ManageOrdders';
import AddReview from './Dashboard/AddReview';
import Reveiws from './Pages/Home/Reveiws/Reveiws';


import BussinessSummary from './Pages/Home/BussinessSummary/BussinessSummary';
import Contact from './Pages/Home/Contact/Contact';
import Profile from './Dashboard/Profile';
import Payment from './Dashboard/Payment/Payment';
import Blog from './Pages/Home/Blog/Blog';
// import RequireNurmaluser from './Pages/RequireAuth/RequireNurmaluser';
import NotFound from './Pages/NotFound';
import Banner from './Pages/Home/Benner/Banner';
import ShowAllreveiw from './Pages/Home/Reveiws/AllReveiw/ShowAllreveiw';
import AllReveiw from './Pages/Home/Reveiws/AllReveiw/AllReveiw';
import Navbars from './Pages/Share/Navbar/Navbars';
// import StarRating from './Dashboard/StarRating';
// import MakeAdmin from './Dashboard/MakeAdmin/MakeAdmin';


// firebase deploy

function App() {
  return (
    <div className="">
      <Navbars></Navbars>
 <Navbar></Navbar>


 <div className=''>

<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='home' element={<Home></Home>}></Route>
<Route path='review' element={<Reveiws></Reveiws>}></Route>
<Route path='contact' element={<RequireAuth><Contact></Contact></RequireAuth>}></Route>
<Route path='blog' element={<Blog></Blog>}></Route>

<Route path='BussinessSummary' element={<BussinessSummary></BussinessSummary>}></Route>

<Route path='dashbord' element={<RequireAuth><Dashboard/> </RequireAuth> }>

<Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
<Route path='addreview' element={<AddReview></AddReview>}></Route>
<Route path='myorders' element={<RequireAuth><Myorders></Myorders></RequireAuth>}></Route>
<Route path='makeadmin' element={<RequireAuth><Makeadmin></Makeadmin></RequireAuth>}></Route>
<Route path='allusers' element={<RequireAuth><Allusers></Allusers></RequireAuth>}></Route>
<Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
<Route path='manageorder' element={<ManageOrdders></ManageOrdders>}></Route>
<Route path='ManageProducts' element={<ManageProducts></ManageProducts>}></Route>
<Route path='Profiles' element={<Profile></Profile>}></Route>
<Route path='Payment/:id' element={<Payment></Payment>}></Route>

</Route>
<Route path="Purchase/:serviceId" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
{/* <Route path="Payment/:id" element={<Payment></Payment>}></Route> */}
<Route path='ShowReveiw' element={<ShowAllreveiw></ShowAllreveiw>}></Route>
<Route path='AllReveiw' element={<AllReveiw></AllReveiw>}></Route>
<Route path='signUp' element={<SignUp></SignUp>}></Route>
<Route path='Login' element={<Login></Login>}></Route>
<Route path="*" element={<NotFound></NotFound>}></Route>

</Routes>


<ToastContainer />

</div>
<Footer></Footer>

    </div>
  );
}

export default App;
