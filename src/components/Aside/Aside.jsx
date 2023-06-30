import './Aside.css';
import { NavLink } from 'react-router-dom';
export const Aside = () =>{
    return(
        <div className="aside-container d-flex">  
             <NavLink to='/'className= {({isActive}) => `${isActive ? 'active-link' : ''} nav-link d-flex`}> 
               <span class="material-icons-outlined">home</span>
               Home
            </NavLink>
             <NavLink to='/archive' className={({isActive}) => `${isActive ? 'active-link' : ''} nav-link d-flex`}> 
                <span class="material-icons-outlined">archive</span>
                Archive 
            </NavLink>
             <NavLink to='/important' className={({isActive}) => `${isActive ? 'active-link' : ''} nav-link d-flex`}> 
                <span class="material-icons-outlined">label_important</span>
                Important 
             </NavLink>
             <NavLink to='/bin' className={({isActive}) => `${isActive ? 'active-link' : ''} nav-link d-flex`}>
                <span class="material-icons-outlined">delete</span>
                Bin
            </NavLink>
        </div>
    )
}