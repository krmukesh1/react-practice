import React, { useContext } from "react";
import Contentuse from "./Contentuse";
import { NewsContext } from "./ContetxAPI/ContextApi";

const Book = () => {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">Contentuse App </h1>
      <div className="all__news">
        {data
          ? data.map((news) => <Contentuse data={news} key={news.url} />)
          : "Loading"}
      </div>
    </div>
  );
};

export default Book;
