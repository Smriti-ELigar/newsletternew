import React from 'react';
import './MC.css'; // Import the CSS file

const MC = ({ data }) => {
  return (
    <div className="mc-container">
      <h1 className="mc-title">MC Updates</h1>
      <table className="mc-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Update Topic</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td data-label="No.">{item.id}</td>
              <td data-label="Update Topic">{item.topic}</td>
              <td data-label="Description">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MC;
