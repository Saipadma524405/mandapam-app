import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home'
const Routing = () => {
  return (
    
       <Routes>

          <Route path="/" element={<Home/>}/>
            {/* <Route path="/Home" element={<Home/>}></Route> */}
            {/* <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/Cart" element={<Cart/>}></Route>
            <Route path="/User" element={<User/>}></Route>
            <Route path="/Product/:id" element={<Product/>}/> */}

        </Routes> 
 
  )
}

export default Routing