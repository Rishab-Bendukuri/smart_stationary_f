import React from 'react'
import Card from './Card'

function Shop() {

return (
    <div className='container'>
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
        <div className="row space-between">
            <div className="col">
            <Card
        title='Apsara Non Dust Erasers'
        imageUrl='https://m.media-amazon.com/images/I/81UC2m3nz9L._SX355_.jpg'
        body='Pack of 20 (Rs: 62.00)'/>
            </div>
            <div className="col">
            <Card
        title='Easy Scissors'
        imageUrl='https://m.media-amazon.com/images/I/51ld+J9CIzL._SY355_.jpg'
        body='Cuts Smoothly (1 Piece)  (Rs: 80.00)'/>
            </div>
            <div className="col">
            <Card
        title='Deli Stapler'
        imageUrl="https://m.media-amazon.com/images/I/71NlwByybIL._SL1500_.jpg"
        body='Deli Office Stapler is made of durable, long-lasting materials that are perfect for your every day needs. Ideal for schools, offices and home (Rs: 279.00)'/>
            </div>
        </div>
        
    </div>
  )
}

export default Shop