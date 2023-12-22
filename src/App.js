/*import logo from './logo.svg';
import './App.css'; */


import React from 'react';
import {Routes, Route, Link} from "react-router-dom"


import Home from './pages/Home';
import About from './pages/About';
import Input from './pages/Input';
import Input2 from './pages/Input2';
import Layout from './layout/Layout';
import HeaderTitle from './pages/HeaderTitle';
import Order from './pages/Counter';

function App() {
  return (
    <Layout headerTitle={<HeaderTitle />}>

    
      <div className="App">
        <nav>
        <Link to='/'>Bagelly </Link> |                 {""}





        <Link to='/about'>Menu</Link> | {""}
        <Link to='/counter'>Order</Link>  | {""}
        <Link to='/input'>Input</Link> | {""}
        <Link to='/input2'>Login</Link>  

        </nav>
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Order />} />
          <Route path="/input" element={<Input />} />
         <Route path="/input2" element={<Input2 />} />
        </Routes>
       <img src="/img/web_heroimg.png" alt='logo image' />
     </div>
    </Layout>
  );
}

export default App;
