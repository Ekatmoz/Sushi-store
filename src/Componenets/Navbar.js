import { Link } from "react-router-dom";
import CartTotal from "./Cart/CartTotal";
import Search from "./Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {

  return ( <nav>
    <Link to="/" className='link logo'>Sushi Shop<span>.</span></Link>
    <Link to="/" className='link'>Home</Link> 
    <Link to="/about" className='link'>About</Link>
    <Link to="/contact" className='link'>Contact</Link>
    <Link to="/product" className='link'>Product</Link>
    <Search/>
    <Link to="/cart"className="link">
      <CartTotal/>
      <Badge badgeContent={4} color="success">
        <ShoppingCartOutlinedIcon className="badgeCart"/>
      </Badge>
    </Link>
    <Link to="/login"className="link">
        <PersonIcon/>
    
    </Link>

  </nav> );
}
 
export default Navbar;