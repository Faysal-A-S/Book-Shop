import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import classes from "./Pagination.module.css"
const Pagination = ({ totalPage, currentPage,setCurrentPage }) => {
  const handleNext = () => {
    if (currentPage < totalPage) {
        setCurrentPage(currentPage + 1)
    }
}

const handlePrevious = () => {
    if (currentPage > 1) {
        setCurrentPage(currentPage - 1)
    }
}
  return (
    <div className={classes.container}>
    <div className={classes.wrapper}>
        <p>Page No.</p>
       
        <p>{currentPage>0?currentPage:1}</p>
        <div className={classes.buttonContainer}>
            <button  disabled={currentPage <= 1} onClick={handlePrevious}>
                <RiArrowLeftSLine size={24} />
            </button>
            <button  disabled={currentPage >= totalPage} onClick={handleNext}>
                <RiArrowRightSLine size={24} />
            </button>
        </div>
    </div>
</div>
  )
}

export default Pagination