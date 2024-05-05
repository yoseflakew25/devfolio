import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddLinkIcon from '@mui/icons-material/AddLink';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {

    return (
        <div className='footerContainer '>
            <div className='contactList'>
            <a href='#' target='_blank' rel="noreferrer">
               <GitHubIcon className='ic' />
           
                                     </a>
                                     <a href='#' target='_blank' rel="noreferrer">
            <LinkedInIcon />
                                     </a>
                                     <a href='#' target='_blank' rel="noreferrer">
            <InstagramIcon />
                                     </a>
                                     <a href='#' target='_blank' rel="noreferrer">
            <MailOutlineIcon />
                                     </a>
                                    
                                     <a href='#' target='_blank' rel="noreferrer">
            <XIcon />
                                     </a>
                                     <a href='#' target='_blank' rel="noreferrer">
            <TelegramIcon />
                                     </a>
                             
                <div className='verticalLine'></div>
            </div>







            <div className='footerRemark  z-20'>
               
                <p> <span className='text-[#64FFDA] mr-8'>Yosef Lakew</span> { Date().substring(0, 16) }</p> 
                   
            </div>                    
            <div className='email'>
                <a href='mailto:1babidagi@gmail.com'>
                    <p> 1babidagi@gmail.com </p>
                </a>
                <div className='verticalLine moveRight'></div>
            </div>
        </div>
    );
}

export default Footer