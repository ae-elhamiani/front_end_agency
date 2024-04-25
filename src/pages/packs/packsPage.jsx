import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import './packsPage.css'; 
import Layout from '../../components/Layout';

function PacksPage() {
  const { clientCode } = useParams();
  const [packs, setPacks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:5050/client-service/banking/pack/${clientCode}`)
      .then(response => {
        setPacks(response.data);
      })
      .catch(error => {
        console.error('Error fetching packs:', error);
      });
  }, [clientCode]); 

  const handleButtonClick = (pack) => {
   
    sessionStorage.setItem('selectedPack', JSON.stringify(pack)); 
    history.push(`/input-email`); 
  };

  return (

    <Layout>
    <div className="pack-selection-page">
      <h1 className="heading">Packs for Client Profile {clientCode}</h1>
      <div className="pack-buttons-container">
        {packs.map(pack => (
          <button key={pack.id} className="pack-button" onClick={() => handleButtonClick(pack)}>
            {pack.name}
          </button>
        ))}
      </div>
    </div>
    </Layout>

  );
}

export default PacksPage;
