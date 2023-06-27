import { Link } from 'react-router-dom';
import '../../NOTES APP.png'
import './navbar.css';
export const Navbar = () =>{
    return(
        <div className='nav-container'>  
          <div> <Link className= "link" to='/'> 
            <img src = "/NOTES APP.png"/>
            <h3 className='nav-items'>Hyper Notes</h3></Link> 
          </div>
        </div>
    )
}