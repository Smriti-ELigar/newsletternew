// import React from 'react'

// const Helpline = () => {
//   return (
//     <div>"Get in Touch for Immediate Assistance"

//     Followed by: "Our dedicated team is ready to help. You can reach us at:"</div>
//   )
// }

// export default Helpline
import React from 'react';
import './Helpline.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Helpline = () => {
  return (
    <div className="about">
      <h1>
      For Emergency Blood Requirement</h1>
      <div className="aboutBottom-b">
      <div className="textContent-b">
      <h3>Our dedicated team is ready to help </h3>
        <Card body>Mrs. Anuradha Peri : 9845999530 </Card>
      <Card body>Mrs. Kavitha Shivram: 9980129169</Card>
      <Card body>Mr. Sreenivas: 9845303574</Card>
        </div>
      </div>
    </div>
  );
};

export default Helpline;
