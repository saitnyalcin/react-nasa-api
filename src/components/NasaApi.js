import axios from 'axios';
import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';

const NasaApi = props => {
  const [data, setData] = useState({ data: {} });

  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=cbtDf4GVLpxTnWt48dkPcK0E8U3pcbDkTnYidFic'
      )
      .then(result => setData(result.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{data.title}</h1>
        <p>{data.explanation}</p>
        <p>Today's date: {data.date}</p>
      </header>
      <img src={data.hdurl} className="" alt="logo" />
    </div>
  );
};

export default NasaApi;
