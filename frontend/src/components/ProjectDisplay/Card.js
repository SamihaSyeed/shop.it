import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import Tag from './Tag'
import star from "../images/star.png"

const Card = (props) => {
  const item = props.data
  return (
    <div className='show-card'>
        <Link to={`/bookTickets/${item.id}/${item.name}`} >
            <img className="show-img" src={item.img} alt='product-img' />
            
        </Link>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <div className='show-name'>{item.name}</div>
        {item.rating && <div className="rating">
                <img width="15px" src={star} alt='rating' />
                <div>{item.rating}</div>
        </div>}
        </div>
        <b ><sup>&#8377;</sup><span style={{fontSize:"25px"}}>{item.price}</span></b>
        <Tag tagName={item.category} />

    </div> 
  ) 
} 


export default Card