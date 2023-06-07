import { Link } from 'react-router-dom';
import './navbar.css';
export const Navbar = () =>{
    return(
        <div className='nav-container'>  
        <div><Link to='/'> <h3>Home</h3></Link> </div>
        <div><Link to='/archive'> <h3> Archive</h3></Link> </div>
        {/* <a href="/"> Home </a>
        <a href="/archive">Archive</a> */}
        </div>
    )
}