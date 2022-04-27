// import React, {Component} from "react";
import "./GetRandomJoke.css";

const GetRandomJoke = ({today_joke}) =>{
  return <p className="random-joke jk">{today_joke.value}</p>
}

/* <h1>{todayjoke.value}</h1> */
export default GetRandomJoke;