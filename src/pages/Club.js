import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Club() {
  const [data, setData] = useState([]);

  const {id} = useParams()

  function fetchclubs() {
    fetch("http://localhost:3000/clubs/" + id)
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
    <div>
      <h1>Club page</h1>
      <p>{data.captain}</p>
    </div>
  )
}

export default Club
