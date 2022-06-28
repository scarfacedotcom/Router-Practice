import { useState } from "react";
import { useNavigate } from 'react-router-dom'


export default function Create() {
  const [clubName, setClubName] = useState("");
  const [coach, setCoach] = useState("");
  const [captain, setCaptain] = useState("");
  const [trophies, setTrophies] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(clubName, coach, captain, trophies);

    fetch("http://localhost:3000/clubs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({ clubName, coach, captain, trophies }),
    })
      .then((result) => navigate("/"))
      .catch((err) => console.log(err));
  };
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
            type="text"
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
