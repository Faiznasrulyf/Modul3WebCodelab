import React from 'react';
import about from './page/about';
import contact from './Page/contact'
import menu from './Page/menu';
import Navbar from './component/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
return (
<Navbar />
      <br></br>Hero
      <Routes>
        <Route path='/' Component={menu}/>
        <Route path='/about' Component={about}/>
        <Route path='/contact' Component={contact}/>
      </Routes>
      <Footer />
);
}
export default App;
