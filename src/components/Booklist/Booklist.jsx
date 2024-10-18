
import { useState } from "react"
import Pagination from "../Resources/Pagination/Pagination"
import BookCard from "./BookCard/BookCard"
import classes from "./Booklist.module.css"
const Booklist = ({data,currentPage,setCurrentPage}) => {
  const count=data?.count ||1
  const totalPage = Math.ceil(count/32)
  const storedList = localStorage.getItem("wishlist")
  let storedObject = storedList ? JSON.parse(storedList) : [];
  const [wishlist,setWishlist]=useState([storedObject])
  return (
    <div className={classes.container}>
      <div className={classes.pagination}>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage}/>
      </div>
    <div className={classes.wrapper}>
    {data?.results &&  data?.results?.map((book)=>{
      return<BookCard key={book.id} data={book} wishlist={wishlist} setWishlist={setWishlist}/>
     }) }
    </div>
    <div className={classes.pagination}>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage}/>
      </div>
    </div>
  )
}

export default Booklist