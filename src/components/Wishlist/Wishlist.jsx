
import { useState } from "react"
import classes from "./Wishlist.module.css"
import BookCard from "../Booklist/BookCard/BookCard"
const Wishlist = () => {
  const storedList = localStorage.getItem("wishlist");
  let storedObject = storedList ? JSON.parse(storedList) : [];
  const [wishlist, setWishlist] = useState(storedObject);
  return (
    <div className={classes.container}>
      <h2>Wishlist</h2>
      <div className={classes.booklist}>
            {
             wishlist.length>0? wishlist.map((wish,index)=>{
                  return <BookCard key={index} data={wish} wishlist={wishlist} setWishlist={setWishlist}/>
                }): <p>No books in wishlist...</p>
              }
      </div>
    </div>
  )
}

export default Wishlist