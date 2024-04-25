import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';
import './inputPhone.css';
import Layout from '../../components/Layout';

function InputPhone() {
  const [phone, setPhone] = useState('');
  const history = useHistory();
  const uuidClient = sessionStorage.getItem('signupUuid');

  const handleSignup = async (e) => {
    e.preventDefault();
    const phoneNumberObj = parsePhoneNumberFromString(phone);
    if (!phoneNumberObj) {
      alert('Invalid phone number');
      return;
    }
    const countryCode = phoneNumberObj.countryCallingCode;
    const nationalNumber = phoneNumberObj.nationalNumber;

    try {
      const response = await fetch('http://localhost:3000/api/client-service/banking/phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uuidClient, keyPhone: `+${countryCode}`, numPhone: nationalNumber }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Failed to signup, status: ${response.status}`);
      }

      console.log('Phone registered successfully!');
      history.push('/verification-phone');
    } catch (error) {
      console.error('Signup Error:', error.message);
      alert('Error during signup.');
    }
  };

  return (
    <Layout>
      <div className="signup-phone-page">
        <h1>Sign Up with Phone</h1>
        <form onSubmit={handleSignup}>
          <PhoneInput
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
            international
            defaultCountry="MA"
            className="phone-input"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </Layout>
  );
}

export default InputPhone;