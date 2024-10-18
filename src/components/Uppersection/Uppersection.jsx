import classes from "./Uppersection.module.css"
import { FaSearch } from "react-icons/fa";
const Uppersection = ({setTitle,pageTitle,title}) => {
  return (
    <div className={classes.container}>
      <h2>{pageTitle}</h2>
      <div className={classes.search}>
        <input type="text" placeholder="Search books by title..." onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <FaSearch className={classes.searchIcon}/>
      </div>
      <div className={classes.filter}>
        filter
      </div>
    </div>
  )
}

export default Uppersection