import './Footer.css';
import gitLogo from '../../assets/github-logo.png';
import linkedInLogo from '../../assets/linkedin-logo.png';
import { Link } from 'react-router-dom';
export const Footer = () => {
    return(
        <div className='footer-container d-flex align-center d-column'>
             <p> Made By Sadaf</p>
             <div className='d-flex foot-soc align-center'>
                <Link to='https://github.com/sadafkhan0107' target='_blank'> <img className = 'foot-logo' src={gitLogo} alt='github-logo'/></Link>
                <Link to='https://www.linkedin.com/in/sadaf-khan-2276081ab/' target='_blank'> <img className = 'foot-logo' src={linkedInLogo} alt='linkedIn-Logo'/></Link>
             </div>
        </div>
    )
    
}