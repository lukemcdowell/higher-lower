import React, {useEffect, useState}  from 'react';
import { API_BASE } from '../variables';
import { Container, Table } from "react-bootstrap";
import  { useAuth0 } from "@auth0/auth0-react";

//displays a leaderboard of the top three scores in the database
//if the user is logged in, displays their play history 
function Stats() {
  const [scores, setScores] = useState();
  const [leaderboard, setLeaderboard] = useState();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {

    if (isAuthenticated) {
      fetch(API_BASE + "Score/" + user.email)
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setScores(data);
      });
    }

    fetch(API_BASE + "Score")
    .then(res => {
      return res.json();
    })
    .then((data) => {
      setLeaderboard(data);
    });    

  });

  return (
    <Container id="stats">
      <br></br>
      <h3>Leaderboard</h3>
      {!leaderboard && <h3>Loading High Score...</h3> }
      {leaderboard && (
        <Table id="leaderboard" striped bordered >
          <thead>
            <tr>
              <th>Rank</th>
              <th>Score</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((score, index) => (
              <tr key={score.id}>
                <td>{index+1}</td>
                <td>{score.scoreCount}</td>
                <td>{score.email}</td>
              </tr>

            ))}
          </tbody>
        </Table>
      )}


      <br></br>
      {!isAuthenticated && <h4>Log in to view score history</h4>}
      {isAuthenticated && !scores && <h4>Loading scores...</h4>}
      {isAuthenticated && scores && ( 
        <>
        <br></br>
        <h4>History</h4>
        <Table id="scores" striped bordered >
          <thead>
            <tr>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {scores && scores.map((score) => (
              <tr key={score.id}>
                <td>{score.scoreCount}</td>
                <td>{new Date(score.time).toLocaleString()}</td>
              </tr>

            ))}
          </tbody>
        </Table>
        <br></br>
        <h4>Your High Score: {Math.max(...scores.map(score => parseInt(score.scoreCount)))}</h4>

        </>
      )}
    </Container>
  )
}

export default Stats