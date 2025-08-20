import React from 'react';
import './TeamSection.css'; // Importing CSS for styling

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Alice Johnson',
      role: 'CEO',
      image: '/images/alice.jpg',
      description: 'Passionate about cleanliness and customer satisfaction.',
    },
    {
      name: 'Bob Smith',
      role: 'Operations Manager',
      image: '/images/bob.jpg',
      description: 'Ensuring smooth operations and quality service delivery.',
    },
    {
      name: 'Cathy Brown',
      role: 'Marketing Specialist',
      image: '/images/cathy.jpg',
      description: 'Bringing CleanSSR to the forefront of the cleaning industry.',
    },
  ];

  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;