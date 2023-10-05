import { useEffect, React  } from 'react'
import "./ProjectDisplaySty.css"
import Card from './Card'
import image from '../images/macbook.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../../actions/productAction'
// import calculatorImg from '../images/calc.jpg'
// import snakeImge from '../images/snake.jpg'
// import typeImg from '../images/type.jpg'


const ProjectDisplay = () => {
    const dispatch = useDispatch();
    const {loading, error, product, productCount} = useSelector(
        (state) => {
            return state.products
        }
    )
    useEffect(()=>{
        dispatch(getProduct())
    }, [dispatch])
    const projectDetails = [
        {
            id:1,
            img:image,
            name:"MACBOOK",
            description:"We layered pattern on pattern and used multiple types of textures and finishes. Multifunctional spaces, loud wallpapers, plenty of plants, signature stand-out tiling - this space has it all. ",
            category:"Fashion",
            rating:5,
            price:500
        },
        {
            id:2,
            img:image,
            name:"TYPING SPEED",
            description:"We layered pattern on pattern and used multiple types of textures and finishes. Multifunctional spaces, loud wallpapers, plenty of plants, signature stand-out tiling - this space has it all. ",
            category:"Fashion",
            rating:5,
            price:500
        },
        {
            id:3,
            img:image,
            name:"TYPING SPEED",
            description:"We layered pattern on pattern and used multiple types of textures and finishes. Multifunctional spaces, loud wallpapers, plenty of plants, signature stand-out tiling - this space has it all. ",
            category:"Fashion",
            rating:5,
            price:500
        }
    ]
  return (
    <div>
        <div className='header-text' style={{"padding":"30px 0"}}> Featured Products </div>
        <div className='project-display' >
        {projectDetails.map(card =>  <Card data={card}  />)}
            {/* {product && product.map(card => {
                console.log("iterating")
                return (<Card data={card} />)
            })} */}
    </div>
    </div>
  )
}


export default ProjectDisplay