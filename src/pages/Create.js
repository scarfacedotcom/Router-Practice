import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

export default function Create() {
  const [clubName, setClubName] = useState("");
  const [coach, setCoach] = useState("");
  const [captain, setCaptain] = useState("");
  const [trophies, setTrophies] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/clubs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({ clubName, coach, captain, trophies }),
    })
      // .then((result) => navigate('/'))
      .then((result) => setTimeout(() => {
        <h1>Thanks </h1>
        navigate('/')
      }, 2000))

      // .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   if (result) {
  //     setTimeout(() => {
  //       <h1>Thanks </h1>
  //       navigate('/')
  //     }, 2000);
  //   }
  // },[result, navigate])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Club Name</span>
          <input
            type="text"
            onChange={(e) => setClubName(e.target.value)}
            value={clubName}
            required
          />
        </label>
        <br />
        <br />
        <label>
          <span>Coach</span>
          <input
            type="text"
            onChange={(e) => setCoach(e.target.value)}
            value={coach}
            required
          />
        </label>
        <br />
        <br />
        <label>
          <span>Captain</span>
          <input
            type="text"
            onChange={(e) => setCaptain(e.target.value)}
            value={captain}
            required
          />
        </label>{" "}
        <br />
        <br />
        <label>
          <span>Trophies</span>
          <input
            type="number"
            onChange={(e) => setTrophies(e.target.value)}
            value={trophies}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
