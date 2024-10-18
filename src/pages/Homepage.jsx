import Uppersection from "../components/Uppersection/Uppersection"
import Booklist from "../components/Booklist/Booklist"
import { useEffect, useState } from "react"
import { apiV1 } from './../api/apiUrl';
import { useDebounce } from "../components/Resources/useDebounce";

const Homepage = () => {
  const [bookData,setBookData]=useState({})
  const [title, setTitle] = useState(() => {
    const savedSearch = localStorage.getItem("search");
    return savedSearch || ""; 
  });
  const [currentPage,setCurrentPage]=useState(1)
  const debouncedTitle=useDebounce(title)
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    const fetchData =async()=>{
      try {
        const response = await fetch(`${apiV1}/books/?page=${currentPage}&search=${debouncedTitle}`,{
          method:"GET",
          headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        })
        const data = await response.json()
        if(response.ok){
          setBookData(data)
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
        setBookData([])
      }
    }
    fetchData()
  },[currentPage,debouncedTitle])
  useEffect(() => {
    const savedSearch = localStorage.getItem("search");
    if (savedSearch) {
      setTitle(savedSearch);
    }
  }, []);
  return (
    <div>
      <Uppersection setTitle={setTitle} pageTitle="Books" title={title}/>

     {
      loading? <p>Loading please wait.....</p>: <Booklist data={bookData} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
     }

    </div>
  )
}

export default Homepage