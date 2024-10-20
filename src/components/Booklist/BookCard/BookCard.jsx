import { useEffect, useState } from "react";
import classes from "./BookCard.module.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCard = ({ data, wishlist, setWishlist }) => {
  const { authors, id, title, formats } = data;
  const [isListed, setIslisted] = useState(false);

  const handleWishList = (event) => {
    // Stop the click event from bubbling up to the Link
    event.preventDefault();
    event.stopPropagation();

    if (wishlist !== null && wishlist.length > 0) {
      const isInWishlist = wishlist.some((item) => item.id === data.id);
      const updatedWishlist = isInWishlist
        ? wishlist.filter((item) => item.id !== data.id)
        : [...wishlist, data];
      setWishlist(updatedWishlist);
    } else {
      setWishlist([data]);
    }
  };

  useEffect(() => {
    if (wishlist !== null && wishlist.length > 0) {
      const isInWishlist = wishlist.some((wish) => wish.id === id);
      setIslisted(isInWishlist);
    } else {
      setIslisted(false);
    }
  }, [id, wishlist]);

  useEffect(() => {
    if (wishlist !== null && wishlist.length > 0) {
      const cleanedList = wishlist.filter(
        (list) =>
          list !== null && list !== undefined && Object.keys(list).length > 0
      );
      localStorage.setItem("wishlist", JSON.stringify(cleanedList));
    }
  }, [wishlist]);

  return (
    <Link to={`/books/${id}`} className={classes.link}>
      <div className={classes.container}>
        <p>Book No: {id}</p>
        <div className={classes.imageContainer}>
          <img src={formats["image/jpeg"]} alt="" />
        </div>
        <button onClick={(e) => handleWishList(e)}>
          <FaHeart
            className={classes.heartIcon}
            fill={isListed ? "rgb(238, 124, 124)" : "currentColor"}
          />
        </button>
        <div className={classes.details}>
          <h2>{title}</h2>
          {authors[0]?.name && <p>By {authors[0]?.name}</p>}
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
