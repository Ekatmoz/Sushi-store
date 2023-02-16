import Buttons from "./Filters/Buttons";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Products  from "./Products/Products"


const Home = () => {

  return ( <div>
    <Header/>
    <Buttons/>
    <div>
      <Products/>
    </div>
    <Footer/>
   
  </div> );
}
 
export default Home;