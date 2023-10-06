import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import PropSample from './PropSample'
import MyApi from './MyApi'
import Counter from './Counter'

export default function Myroute() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/ecommerce' element={<PropSample/>}/>
        <Route path='/myapi' element={<MyApi/>}/>
        <Route path='/counter' element={<Counter/>}/>
 
    </Routes>
    </BrowserRouter>
  )
}
