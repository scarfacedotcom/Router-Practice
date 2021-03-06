import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import Create from "./Create"

//style
import './Home.css'

export default function Home() {
  const [data, setData] = useState([]);


  function fetchclubs() {
    fetch("http://localhost:3000/clubs")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      });
  }

  useEffect(() => {
    fetchclubs();
  }, []);
  return (
    <div className="home">
       
      <h1>TOP FIVE EUROPEAN CLUBS</h1>
      <NavLink to="/Create" className="create">Add a new club</NavLink>
      {data && data.map((club) => [
        <div key={club.id} className="card">
          <h2>{club.clubName}</h2>
          <p>{club.trophies}</p>
          <NavLink to={`/clubs/${club.id}`}>Read More...</NavLink>
        </div>
      ])}
    
    </div>
  );
}
