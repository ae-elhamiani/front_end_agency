import Layout from '../../components/Layout';
import './clientProfile.css';
import React from 'react';
import ProfileOffersSection from './ProfileOffersSection';

function ClientProfile() {
  const handleBuildWorldClick = () => {
    const profileOffersSection = document.getElementById('profile-offers');
    if (profileOffersSection) {
      profileOffersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <h1>Open a bank account</h1>
          <h2>100% Online</h2>
          <p>and take advantage of exclusive offers and take advantage of exclusive offers</p>
          <button className="build-your-world" onClick={handleBuildWorldClick}>
            BUILD YOUR WORLD
          </button>
        </div>
        <div className="hero-image">
          <img src="credit-cards.png" alt="Credit Cards" />
        </div>
      </section>
    
      <section>
        <div className="feature-container">
          <div className="feature-card">
            <div className="icon-container">
            <img  src="speedup.png" alt="speed up Cards" />
            </div>
            <h3>Ouverture de compte en quelques clics</h3>
            <p>Ouvrir un compte bancaire en ligne depuis votre mobile, tablette ou ordinateur en quelques clics seulement à travers notre banque en ligne.</p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
            <img  src="speedup.png" alt="speed up Cards" />
            </div>
            <h3>Une gamme de produits large et avantageuse</h3>
            <p>L'Agence directe vous apporte le meilleur de la banque en ligne à travers des offres exclusives à partir de 0 Dh seulement.</p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
            <img  src="speedup.png" alt="speed up Cards" />
            </div>
            <h3>Des conseillers disponibles pour vous accompagner en ligne</h3>
            <p>Des conseillers sont à votre disposition afin de vous accompagner pour ouvrir un compte bancaire en ligne en toute facilité.</p>
          </div>
        </div>
      </section>
      <section className="agence-directe">
        <div className="agence-directe-wrapper">
          <div className="agence-directe-image">
            <img src="section2.svg" alt="Credit Cards" />
          </div>
          <div className="agence-directe-content">
            <h2>Agence Directe by BANK OF AFRICA</h2>
            <h3>The online bank for everyone</h3>
            <p>
              In the video, discover your simplified process to open an online bank anywhere you are by taking advantage of exclusive offers at 0 MAD.
            </p>
            <p>
              With Agence Directe by BANK OF AFRICA, open up to a variety of advantages in just a few clicks thanks to our online bank and benefit from most of the products and services that suits your profile, whether you are a student, employee or retired in Morocco, as well as abroad.
            </p>
            <button className="video-btn">
              See the video
              <div className="play-video">
                <img src="play-video.png" alt="play video" />
              </div>
            </button>
          </div>
        </div>
      </section>
      <ProfileOffersSection />
    </Layout>
  );
}

export default ClientProfile;