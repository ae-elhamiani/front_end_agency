import React from 'react';
import { useLocation } from 'react-router-dom';
import './ocrDataForm.css'; 


function OcrDataForm() {
  const { state } = useLocation();
  const { ocrData } = state; 
  const [formData, setFormData] = React.useState(ocrData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reviewed Data:', formData);
  };

  return (
    <div className="ocr-page">
        <form onSubmit={handleSubmit} className="form-container">
        {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="form-field">
            <label>{key}:</label>
            <input
            type="text"
            name={key}
            value={value || ''}
            onChange={handleInputChange}
            />
        </div>
        ))}
        <button type="submit">Submit Reviewed Data</button>
    </form>
  </div>
  );
}

export default OcrDataForm;
