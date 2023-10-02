import React from 'react'
import "./ProjectDisplaySty.css"
import Card from './Card'
import image from '../images/macbook.jpg'
// import calculatorImg from '../images/calc.jpg'
// import snakeImge from '../images/snake.jpg'
// import typeImg from '../images/type.jpg'


const ProjectDisplay = () => {
    const projectDetails = [
        {
            id:3,
            img:image,
            name:"TYPING SPEED",
            description:"We layered pattern on pattern and used multiple types of textures and finishes. Multifunctional spaces, loud wallpapers, plenty of plants, signature stand-out tiling - this space has it all. ",
            category:"Fashion",
            rating:5
        },
        {
            id:3,
            img:image,
            name:"TYPING SPEED",
            description:"We layered pattern on pattern and used multiple types of textures and finishes. Multifunctional spaces, loud wallpapers, plenty of plants, signature stand-out tiling - this space has it all. ",
            category:"Fashion",
            rating:5
        },
        {
            id:3,
            img:image,
            name:"TYPING SPEED",
            description:"We layered pattern on pattern and used multiple types of textures and finishes. Multifunctional spaces, loud wallpapers, plenty of plants, signature stand-out tiling - this space has it all. ",
            category:"Fashion",
            rating:5
        }
    ]
  return (
    <div>
        <div className='header-text' style={{"padding":"30px 0"}}> Featured Products </div>
        <div className='project-display' >
            {projectDetails.map(card=> {
                return (<Card data={card} />)
            })}
    </div>
    </div>
  )
}


export default ProjectDisplay