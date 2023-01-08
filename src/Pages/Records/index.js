import React from 'react';
import './styles.css'


function Records() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Comment</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Onometokpaiyare</td>
          <td>32</td>
          <td>New York</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>27</td>
          <td>San Francisco</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Records