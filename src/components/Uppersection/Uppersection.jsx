import classes from "./Uppersection.module.css"
import { FaSearch } from "react-icons/fa";
const Uppersection = ({setTitle,pageTitle,title,setGenre,predefinedGenreList}) => {
    const onOptionChangeHandler=(e)=>{
        setGenre(e.target.value)
    }
  return (
    <div className={classes.container}>
      <h2>{pageTitle}</h2>
      <div className={classes.search}>
        <input type="text" placeholder="Search books by title..." onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <FaSearch className={classes.searchIcon}/>
      </div>
      <div className={classes.filter}>
        <select onChange={onOptionChangeHandler} className={classes.select} >

                 <option value="">Select Topic</option>
                {predefinedGenreList.map((genre, index) => {
                    return (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                    );
                })}
            
            </select>
      </div>
    </div>
  )
}

export default Uppersection