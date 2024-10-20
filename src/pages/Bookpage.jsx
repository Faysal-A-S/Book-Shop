import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiV1 } from "../api/apiUrl";
import SingleBook from "../components/SingleBook/SingleBook";

const Bookpage = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiV1}/books/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.ok) {
          setBookData(data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setBookData([]);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading please wait....</p>
      ) : (
        <SingleBook data={bookData} />
      )}
    </div>
  );
};

export default Bookpage;
