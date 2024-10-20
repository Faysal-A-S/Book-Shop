import { Link, useLocation } from "react-router-dom";
import classes from "./Navbar.module.css";
const Navbar = () => {
  const location = useLocation();

  return (
    <div className={classes.container}>
      <Link to="">
        <h2>Book Store</h2>
      </Link>
      <Link to="/wishlist">
        <p
          className={`${location.pathname !== "/wishlist" ? classes.link : classes.selected}`}
        >
          WishList
        </p>
      </Link>
    </div>
  );
};

export default Navbar;
