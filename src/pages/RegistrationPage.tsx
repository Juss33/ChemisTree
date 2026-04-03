import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import '../styles/RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    schoolDistrict: '',
    schoolName: '',
    address: '',
    email: '',
    nstudents: '',
    acknowledge: false,
    instructions: false,
  });
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const createRegistration = useMutation(api.registration.createRegistration);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    if (!formData.schoolDistrict.trim() || !formData.schoolName.trim() || !formData.address.trim() || !formData.email.trim() || !formData.nstudents.trim() || isNaN(Number(formData.nstudents)) || Number(formData.nstudents) <= 0 || !formData.acknowledge || !formData.instructions) {
      setError('Please fill in all required fields and agree to the terms.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await createRegistration({
        schoolDistrict: formData.schoolDistrict,
        schoolName: formData.schoolName,
        address: formData.address,
        email: formData.email,
        nstudents: Number(formData.nstudents),
        acknowledge: formData.acknowledge,
        instructions: formData.instructions,
      });
      navigate('/success');
    } catch (error) {
      console.error('Error submitting registration:', error);
      setError('An error occurred while submitting. Please try again.');
    }
  };

  return (
    <div className="content">
      <h1>2026 NWSS Organic Nomenclature Competition Registration</h1>
      <p>Fill information below to participate at the competition.</p>

      {error && (
        <div className="error-message">
          <p style={{ color: 'red' }}>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact information (Required)</legend>
          <div>
            <div className="box1">
              <label htmlFor="schoolDistrict">School District</label>
              <input
                type="text"
                id="schoolDistrict"
                name="schoolDistrict"
                value={formData.schoolDistrict}
                onChange={handleChange}
              />
            </div>
            <div className="box1">
              <label htmlFor="schoolName">School Name</label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
              />
            </div>
            <div className="box1">
              <label htmlFor="address">City, Province</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="box1">
              <label htmlFor="email">Teacher email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="box1">
              <label htmlFor="nstudents">Number of students participating in the contest.</label>
              <input
                type="number"
                id="nstudents"
                name="nstudents"
                value={formData.nstudents}
                onChange={handleChange}
                min="1"
              />
            </div>
            <div className="checkbox-row">
              <input
                type="checkbox"
                id="acknowledge"
                name="acknowledge"
                checked={formData.acknowledge}
                onChange={handleChange}
              />
              <label htmlFor="acknowledge">
                I acknowledge that this contest is free for participants and is provided by New Westminster Secondary School Science Club.
              </label>
            </div>

            <div className="checkbox-row">
              <input
                type="checkbox"
                id="instructions"
                name="instructions"
                checked={formData.instructions}
                onChange={handleChange}
              />
              <label htmlFor="instructions">
                By registering to participate, I agree to invigilate the contests per the instructions provided. (i.e., printing out and distributing the contest, supervising the students participating in the contest, including answering questions in the online survey, and adhering to the time limit = 40 minutes)
              </label>
            </div>
          </div>
        </fieldset>

        <button type="submit" id="submit" name="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationPage;