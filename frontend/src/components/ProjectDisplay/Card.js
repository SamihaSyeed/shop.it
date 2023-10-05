import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import Tag from './Tag'
import star from "../images/star.png"
import wishlist from "../images/wishlist.png"
import wishlisted from "../images/wishlisted.png"
const Card = (props) => {
  function handleClick() {
    let image = document.getElementById(item.id)
    image.src = image.src == wishlisted ? wishlist : wishlisted
    
  }
  const item = props.data
  return (
    <div className='show-card'>
        <Link to={`/bookTickets/${item.id}/${item.name}`} >
            <img className="show-img" src={item.img} alt='product-img' />
            
        </Link>
        <button className='wishlist' onClick={handleClick}>
          <img src={wishlist} id={item.id}  width="30px" height="30px" />
          
        </button>
        <div style={{display:"flex", justifyContent:"space-between", marginTop:"-20px"}}>
        <div className='show-name'>{item.name}</div>
        {item.rating && <div className="rating">
                <img width="15px" src={star} alt='rating' />
                <div>{item.rating}</div>
        </div>}
        </div>
        <b ><sup>&#8377;</sup><span style={{fontSize:"25px"}}>{item.price}</span></b>
        <Tag tagName={item.category} />
        <button className='primary-btn cart-btn'>ADD TO CART</button>

    </div> 
  ) 
} 


export default Card