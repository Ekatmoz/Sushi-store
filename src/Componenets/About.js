import { Link } from "react-router-dom";
import about2 from "../img/about2.jpg"
const About = () => {
  return ( <div>
    <div className="about-shape"></div>
     <div className="about-header">
     <div>
      <img src={about2} width="500px" alt="asian"/>
     </div>
     <div className="block">
      <h1>About <span>us</span></h1>
      <p>Asia home cooking is full of flavor, light on ingredients and surprisingly quick to make. To recreate at home some of your delicious Asian foods, you need the proper ingredients.</p>
      <p>Our store will help you become a seasoned chef by keeping the right Asian pantry staples on hand.</p>
      <p>Discover our easy Asian recipes from Sushi, Maki rolls and basic staples like Miso soup or tempura fried vegetables.</p>
      <p>Bring something different to the table!</p>
      <button className="secondBtn"><Link to="/" className="btn">Home</Link> </button>
      </div>
    </div>
   
  </div> );
}
 
export default About;