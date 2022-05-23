
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Share/Footer/Footer';

import Navbar from './Pages/Share/Navbar/Navbar';


function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
 <Navbar></Navbar>

<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='home' element={<Home></Home>}></Route>

</Routes>

<Footer></Footer>

    </div>
  );
}

export default App;
