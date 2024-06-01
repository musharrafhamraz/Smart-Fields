// src/components/Team.js

import React from 'react';
import './team.css';

const teamMembers = [
  { id: 1, image: require('../images/maqsood.jpeg'), name: 'Maqsood', designation: 'Founder' },
  { id: 4, image: require('../images/pic.jpeg'), name: 'Musharraf Hamraz', designation: 'Co-Founder & CEO' },
  { id: 3, image: require('../images/zameer1.jpg'), name: 'Zameer Abbas', designation: 'Lead Developer' },
  { id: 2, image: require('../images/tehzeeb1.jpg'), name: 'Tehzeeb Hassan', designation: 'AI Engineer' },
  { id: 5, image: require('../images/inzi.jpeg'), name: 'Inzimam Ullah Khan', designation: 'Marketing Manager' },
  { id: 6, image: require('../images/farhan.jpeg'), name: 'Farhan Karim', designation: 'Developer' },
];

const Team = () => {
  return (
    <div className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map(member => (
          <div className="team-card" key={member.id}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
