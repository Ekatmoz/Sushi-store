import Buttons from "../Componenets/Filters/Buttons";
import Footer from "../Componenets/Footer/Footer";
import Header from "../Componenets/Header";
import Products  from "../Componenets/Products/Products"


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