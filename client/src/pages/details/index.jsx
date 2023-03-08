import React from 'react'
import AccordionCustom from '../components/accordion'
import Accordion from '../components/accordion'

const Details = () => {
  return (
    <div className='container grid grid-cols-1 lg:grid-cols-2' >
      <div className="slider-product">
        slider
      </div>
      <div className="product-desc">
        <AccordionCustom/>
      </div>
    </div>
  )
}

export default Details