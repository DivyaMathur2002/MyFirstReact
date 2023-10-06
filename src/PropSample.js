import React from 'react'

function Test(props) {
  return (
    <>
    <img src={props.url} width={100}/>
    <h2>{props.name}</h2>
    </>
  )
}

export default function PropSample() {
  return (
    <>
    <Test url="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" name="Product 1"/>
    <Test url="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" name="Product 2"/>
    <Test url="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" name="Product 3"/>
        </>
  )
}

