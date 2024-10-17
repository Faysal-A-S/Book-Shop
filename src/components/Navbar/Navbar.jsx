import { Link } from "react-router-dom"
import classes from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={classes.container}>
      <Link to=""><h2>Book Store</h2></Link>
      <Link to="/wishlist"> <p>WishList</p></Link>
    </div>
  )
}

export default Navbar