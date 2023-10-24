import React from 'react';
import Home from './component/Home';
import About from './component/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

const Contact = () => {return (<h1>cwhwuc@gmail.css</h1>)}
function Navbar() {

    <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7XrxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>

return (
<Router>
<nav>
<ul>
<li>
<div className="fixed-top">
<div className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<a className="navbar-brand" href="#"></a>
<img src="image/img/avatark1u.jpg" alt="logo-ilab" width="70" height="30"/>

<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
<Link to="/" className="nav-link navbarr">Beranda</Link>
<Link to="/about" className="nav-link navbarr">Tentang</Link>
<Link to="/contact" className="nav-link navbarr">Kontak</Link>

<div className="tombol">
        <buttons type="button" className="btn btn-outline-secondary" aria-current="true"> SIGN UP</buttons>
        <button type="button" className="btn btn-primary" >LOGIN</button>
      </div>

</div>
</div>
</div>
</div>



</li>
<li>
<Link to="/about">Tentang</Link>
</li>
<li>
<Link to="/contact">Kontak</Link>
</li>
</ul>
</nav>
<Routes>
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/" element={<Home/>} />
</Routes>
</Router>
);
}
export default Navbar;