import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './uploadCin.css'; 

function UploadCin() {
  const [images, setImages] = useState({
    cinRecto: null,
    cinVerso: null,
    selfie: null,
  });
  const history = useHistory();

  const handleFileChange = (e) => {
    setImages({ ...images, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    Object.entries(images).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      const response = await fetch('http://localhost:5050/client-service/api/upload', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      
      });
      console.log(response);
      
      if (!response.ok) throw new Error('Failed to upload images.');

      const ocrData = await response.json();
      history.push('/ocr-data-form', { ocrData });

    } catch (error) {
      console.error('Upload Error:', error);
      alert('Error uploading files.');
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Images</h2>
      <form className="upload-form" onSubmit={handleSubmit}>
        <input className="file-input" type="file" name="cinRecto" onChange={handleFileChange} />
        <input className="file-input" type="file" name="cinVerso" onChange={handleFileChange} />
        <input className="file-input" type="file" name="selfie" onChange={handleFileChange} />
        <button className="upload-button" type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadCin;
