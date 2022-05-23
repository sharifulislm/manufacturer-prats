
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';

import Navbar from './Pages/Share/Navbar/Navbar';


function App() {
  return (
    <div className="App">
 <Navbar></Navbar>

<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='home' element={<Home></Home>}></Route>

</Routes>


    </div>
  );
}

export default App;
