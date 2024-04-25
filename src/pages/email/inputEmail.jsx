import React, { useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './inputEmail.css'; 
import Layout from '../../components/Layout';


function InputEmail() {
  const [email, setEmail] = useState('');
  const history = useHistory();
  const [selectedPack, setSelectedPack] = useState(null);

  useEffect(() => {
    const pack = JSON.parse(sessionStorage.getItem('selectedPack'));
    setSelectedPack(pack);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5050/client-service/banking/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email , packCode: selectedPack.code}), 
      });

      const contentType = response.headers.get("content-type");
    if (!response.ok) {
      throw new Error('Response not OK');
    } else if (contentType && contentType.indexOf("application/json") !== -1) {
      const data = await response.json();
      console.log('Signed up successfully!');
      sessionStorage.setItem('signupUuid', data.uuid); 
      history.push('/verification-email');
    } else {
      throw new Error('Received non-JSON response');
    }
  } catch (error) {
    console.error('Error signing up:', error.message);
  }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Layout>
    <div className="signup-page">
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input 
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </Layout>

  );
}

export default InputEmail;
