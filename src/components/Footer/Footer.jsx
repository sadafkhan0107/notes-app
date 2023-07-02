import './Footer.css';
import gitLogo from '../../assets/github-logo.png';
import linkedInLogo from '../../assets/linkedin-logo.png';
export const Footer = () => {
    return(
    <div>
        <div className='footer-container d-flex align-center d-column'>
             <p> Made By Sadaf</p>
             <div className='d-flex foot-soc align-center'>
                <a href='https://github.com/sadafkhan0107' > <img className = 'foot-logo' src={gitLogo} alt='github-logo'/></a>
                <a href='https://www.linkedin.com/in/sadaf-khan-2276081ab/' > <img className = 'foot-logo' src={linkedInLogo} alt='linkedIn-Logo'/></a>
             </div>
        </div>
    </div>
    )
    
}