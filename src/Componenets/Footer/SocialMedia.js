import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const SocialMedia = () => {

  return ( <div className="col-lg-3 col-md-6 footer-links">
  <h4>Follow Us</h4>
  <div className="social-links d-flex">
  <a href="/#" target="_blank">
    <FontAwesomeIcon icon={faTwitter}/>
    </a>

    <a href="https://www.facebook.com/sushibarsiofok/" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faFacebook}/>
    </a>

    <a href="https://www.instagram.com/sushi_bar_hungary/" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faInstagram}/>
    </a>
    
  </div>

</div> );
}

export default SocialMedia;