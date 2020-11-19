import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FrontPage from './FrontPage';

const App = () => {
const [apiKey, setApiKey] = useState('d5e8a3e5134a4319825a31506d505c31');

  useEffect(() => {
    
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
              <Route exact path='/' render={(props) => { return <FrontPage {...props} />}} />
    </div>
  );
}

export default App;
