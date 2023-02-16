import SocialMedia from "./SocialMedia";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

  return ( 
  <div id="footer" className="footer">

    <div className="container">
      <div className="row gy-3">
        <div className="col-lg-3 col-md-6 d-flex">
            <FontAwesomeIcon icon={faLocationDot} size="2x" className="icon"/>
          <div>
            <h4>Cím</h4>
            <p>Széchenyi utca 18, Siófok</p>
          </div>

        </div>

        <div className="col-lg-3 col-md-6 footer-links d-flex">
          <FontAwesomeIcon icon={faPhone} size="2x" className="icon"/>
          <div>
            <h4>Foglalás</h4>
            <p><strong>Telefon:</strong> + 36 70 791 6990</p>
            <p><strong>Email:</strong> szen.robert@gmail.com</p>      
          </div>
        </div>

        <div className="col-lg-3 col-md-6 footer-links d-flex">
        <FontAwesomeIcon icon={faClock} size="2x" className="icon"/>
          <div>
            <h4>Nyitvatartás</h4>
            <p><strong>Kedd-Szombat:</strong> 11:00 - 19:00</p>
            <p><strong>Vasárnap:</strong> 11:00 - 19:00</p>
            <p><strong>Hétfőn: Zárva</strong></p>
          
          </div>
        </div>

        <SocialMedia/>

      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><strong>Sushi Bar Hungary</strong></strong>. All Rights Reserved
      </div>
      <div className="credits">
       
      
        Designed by Katerina Mozhaeva 2022.
      </div>
    </div>
    </div> );
}
 
export default Footer;