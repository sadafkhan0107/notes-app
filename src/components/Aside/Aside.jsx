import './Aside.css';
import { Link } from 'react-router-dom';
export const Aside = () =>{
    return(
        <div className="aside-container">
            <div className='aside-btn'> <Link className='link' to='/'><button className='btn'> Home </button> </Link></div> 
            <div className='aside-btn'> <Link className= "link" to='/archive'><button className='btn'> Archive</button> </Link> </div>
            <div className='aside-btn'> <button className='btn'> Important</button> </div>
            <div className='aside-btn'> <Link className='link' to='/bin'><button className='btn'> Bin </button> </Link></div>
        </div>
    )
}