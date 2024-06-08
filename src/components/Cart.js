import React from 'react'
import Card from './Card'
import Dropdownp from './Dropdownp';
function Cart() {
    let x = 50;
  return (
    <div className='container'>
        <div>
            <h1>Total = {x}</h1>
        </div>
        <div className="row space-between">
            <div className="col">
            <Card
        title='Butterflow Gel pen'
        imageUrl='https://m.media-amazon.com/images/I/61TxXDiHKbL._SL1500_.jpg'
        body='Blue gel pen (Rs: 10.00)'/>
            </div>
            <div className="col">
            <Card
        title='Natraj Scale'
        imageUrl='https://m.media-amazon.com/images/I/41FbvBmLUmL.jpg'
        body='15cm (Rs: 10.00)'/>
            </div>
            <div className="col">
            <Card
        title='Apasara Pencil'
        imageUrl="https://m.media-amazon.com/images/I/41vy89JduVL.jpg"
        body='Extra Dark (20pcs) (Rs: 30.00)'/>
            </div>
        </div>
        <div>
            <h2>Choose a time slot: </h2>
            <br />
            <Dropdownp/>
        </div>
    </div>
  )
}

export default Cart