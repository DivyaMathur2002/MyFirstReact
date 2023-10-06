import React from 'react'
import Nav from './Nav'
import alpha from './image/image1.jpg'

export default function About() {
  return (
   <>
   <Nav/>
    <h1>About</h1>
    <img src={alpha} height={400} width={500}></img>
   </>
  )
}
