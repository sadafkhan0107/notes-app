import { Link } from 'react-router-dom';
import './navbar.css';
export const Navbar = () =>{
    return(
        <div className='nav-container'>  
        <div><Link className= "link" to='/'> <h3 className='nav-items'>Home</h3></Link> </div>
        <div className='nav-items'><Link className= "link" to='/archive'> <h3> Archive</h3></Link> </div>
        </div>
    )
}