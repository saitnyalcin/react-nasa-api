import axios from 'axios';
import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import AuthenticationAPI from '../services/NasaApiService';

const NasaApi = props => {
  const [data, setData] = useState({ data: {} });

  useEffect(() => {
    axios.get(AuthenticationAPI.API_URL()).then(result => setData(result.data));
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
