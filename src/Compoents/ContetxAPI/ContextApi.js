
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apikey="1af1f98deb3342b29815842329bd2489"

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2021-12-11&sortBy=publishedAt&apiKey=${apikey}`
      )
      .then((response) => setData(response.data.articles))
      .catch((error) => console.log(error));
  }, []);
  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};