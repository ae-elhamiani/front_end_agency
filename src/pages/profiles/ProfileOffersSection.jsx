import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './clientProfile.css'; 
function ProfileOffersSection() {
  const [clientProfiles, setclientProfiles] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:5050/client-service/banking/')
      .then(response => {
        setclientProfiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching client profiles:', error);
      });
  }, []);

  const handleclientProfileSelect = (clientCode) => {
    history.push(`/pack/${clientCode}`);
  };
  return (
    <section id="profile-offers" className="profile-offers-section">
      <h2>Choose the offer that suits your profile</h2>
      <div className="offer-cards">
       {clientProfiles.map(ClientProfile => (
          <div key={ClientProfile.id} className="offer-card" onClick={() => handleclientProfileSelect(ClientProfile.code)}>
            <div className="offer-icon">
              <img src={`${ClientProfile.code}-icon.png`} alt={ClientProfile.name} />
            </div>
            <h3>{ClientProfile.name}</h3>
            <button className="discover-offer">Discover the offer</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfileOffersSection;