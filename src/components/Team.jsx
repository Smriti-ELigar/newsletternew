import React from 'react';
import './Team.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Team = () => {
  return (
    <div className="about-team">
      <h1>Vibes Team</h1>
      <div className="aboutBottom-b">
      <div className="textContent-b">
        <Card body>Ms. Anuradha Peri</Card>
      <Card body>Ms. Kavitha Shivram</Card>
      <Card body>Ms. Smriti Eligar</Card>
      <Card body>Mr. Sreenivas S - Our Mentor</Card>
        </div>
      </div>
    </div>
  );
};

export default Team;
