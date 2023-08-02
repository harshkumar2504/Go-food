import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Carousal from '../components/Carousal'
import { Card } from 'react-bootstrap'
import Cards from '../components/Cards'

export default function Home() {
  return (
    <div>
        <div><Navbar/></div>
        <div><Carousal/></div>
<div className='m-3'>
  <Cards/>
</div>
        
        <div> <Footer/> </div>


    </div>
  )
}
