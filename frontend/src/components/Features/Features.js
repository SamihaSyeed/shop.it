import React from 'react'
import Shop from '../images/Shop.svg'
import Bot from '../images/Bot.svg'
import Cart from '../images/Cart.svg'
import './Feature.css'
const Features = () => {
  return (
    <div className='feature-component'>
        <div className='feature'>
            <div>
                <img src={Shop} alt='' />
            </div>
            <div className='feature-title'>Sell On Shop.it</div>
            <div>Open your own store and connect with your customers directly</div>
            <button className='feature-btn primary-btn'>Register store</button>
        </div>
        <div className='feature' style={{marginTop:"50px"}}>
            <div>
                <img src={Bot} alt='' />
            </div>
            <div className='feature-title'>Get personalised suggestions</div>
            <div>Ask our AI Bot for a good product recommendation</div>
            <button className='feature-btn primary-btn'>Send Prompt</button>
        </div>
        <div className='feature'>
            <div>
                <img src={Cart} alt='' />
            </div>
            <div className='feature-title'>Easy Shopping</div>
            <div>Shop a wide range of products online</div>
            <button className='feature-btn primary-btn'>Shop Now</button>
        </div>
    </div>
  )
}

export default Features