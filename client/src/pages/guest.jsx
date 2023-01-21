import { Button } from 'flowbite-react'
import React from 'react'
import Header from './components/header'
import Products from './products'

const Guest = () => {
  return (
  <div className="main">
     <Header/>
   <Products/>
  </div>
  )
}

export default Guest