import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './verificationPhone.css';
import Layout from '../../components/Layout';


function VerificationPhone() {
  const [userInput, setOtp] = useState('');
  const history = useHistory();

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    const uuidClient = sessionStorage.getItem('signupUuid');
    if (!uuidClient) {
      console.error('No UUID found');
      return;
    }

    try {
      const response = await fetch('http://localhost:5050/client-service/banking/otp-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uuidClient, userInput }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Failed to signup, status: ${response.status}`);
      }
      console.log('OTP verified successfully!');
      history.push('/upload-cin');
    } catch (error) {
      console.error('Error verifying OTP:', error.message);
    }
  };

  const handleRegenerateOtp = () => {
    history.push('/signup-phone');
  };

  return (
    <Layout>
    <div className="otp-verification-page">
      <h1>OTP Verification</h1>
      <form onSubmit={handleOtpSubmit}>
        <input 
          type="text"
          placeholder="Enter OTP"
          value={userInput}
          onChange={handleOtpChange}
          required
        />
        <div className="form-actions">
          <button type="submit" className="verify-otp-btn">Verify OTP</button>
          <button type="button" onClick={handleRegenerateOtp} className="regenerate-otp-btn">Resend</button>
        </div>
      </form>
    </div>
    </Layout>

  );
}

export default VerificationPhone;
