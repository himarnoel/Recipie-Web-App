import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import logo from '../logo.svg';
const Home = () => {
    const [response, setresponse] = useState([]);
    useEffect(() => {
    fetch();
    }, []);
const fetch=()=>{
    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/feeds/list',
        params: {limit: '20', start: '0'},
        headers: {
          'X-RapidAPI-Key': 'd1c3feb019msh6bfa0f63023fa82p154dd1jsn5370e62f0d68',
          'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
        }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data.feed);
        setresponse([...response.data.feed])
    }).catch(function (error) {
        console.error(error);
    });
}
  return (
    <div>
    <div className="p-5 nd">
    <div class="row row-cols-1 row-cols-md-5 justify-content-center  align-content-center">
  {

  response.length===0?
 <center>
    <div class="text-danger text-center col-lg-12 col-12 col-md-12 " role="status">
    <img src="https://user-images.githubusercontent.com/30567608/29747950-30cc46ec-8b0b-11e7-8ded-560affefbe59.gif" className="img-fluid"/>
  <span class="visually-hidden">Loading...</span>
</div>
 </center> 
  : response.map((data,i)=>(
        <div class="col-12 col-lg-3 col-md-5 p-3 text-center">
    <div class="card shadow-lg rounded border border-white">
      <img src={data.display.images[0]} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{data.display.displayName}</h5>
        <p class="card-text"></p>
      </div>
    </div>
  </div>

    ))
  }
  
</div>
    </div>
    </div>
  )
}

export default Home