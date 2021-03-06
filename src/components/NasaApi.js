import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import AuthenticationAPI from "../services/NasaApiService";

const NasaApi = (props) => {
  // set the state of the data in this line
  const [data, setData] = useState({ data: {} });

  useEffect(() => {
    async function callNasaApi() {
      await fetch(AuthenticationAPI.API_URL())
        .then((response) => response.json())
        .then((data) => setData(data))
        .then((result) => {
          console.log("Success:", result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    callNasaApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{data.title}</h1>
        <p>{data.explanation}</p>
        <p>Today's date: {data.date}</p>
      </header>
      <img src={data.hdurl} className="image" alt="logo" />
    </div>
  );
};

export default NasaApi;
