import { Link } from 'react-router-dom';
import logo from '../../assets/NOTES APP.png'
import './navbar.css';

export const Navbar = () =>{
    return(
        <header className='header d-flex'>   
            <Link className= "link" to='/'> 
              <img className="logo" src={logo} alt='logo'/>
              <h1 className='heading-1'>Hyper Notes</h1>
            </Link> 
        </header>
    )
}