import classes from "./SingleBook.module.css";

const SingleBook = ({ data }) => {
  const { authors, id, title, formats, subjects } = data;
  return (
    <div className={classes.container}>
      <p className={classes.id}>Book No. {id}</p>
      <div>
        <img src={formats["image/jpeg"]} alt="" loading="eager" />
      </div>
      <p className={classes.title}>{title}</p>
      <p className={classes.author}>
        <span>Authors:</span> {authors[0].name}
      </p>
      <p className={classes.tags}>
        Topics: <br />
        {subjects.length > 0 &&
          subjects.map((subject, index) => (
            <>
              <span key={index}>{subject}</span> <br />
            </>
          ))}
      </p>
    </div>
  );
};

export default SingleBook;
