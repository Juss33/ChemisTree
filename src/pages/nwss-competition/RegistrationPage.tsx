import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import '../../styles/RegistrationPage.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

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

  const [validated, setValidated] = useState(false);

  const validateForm = () => {
    setValidated(true);
    var isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email);
    if (!formData.schoolDistrict.trim() || !formData.schoolName.trim() || !formData.address.trim() || !formData.email.trim() || !formData.nstudents.trim() || isNaN(Number(formData.nstudents)) || Number(formData.nstudents) <= 0 || !formData.acknowledge || !formData.instructions || !isEmailValid) {
      setError('Please fill in all required fields and agree to the terms.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const submitButton = document.getElementById("submitButton") as HTMLButtonElement;
    submitButton.disabled = true; 
    console.log(submitButton.disabled); 
    e.preventDefault();

    if (!validateForm()) {
      submitButton.disabled = false; 
    console.log(submitButton.disabled); 
      return
    };

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
      navigate('/nwss-competition/success');
    } catch (error) {
      console.error('Error submitting registration:', error);
      setError('An error occurred while submitting. Please try again.');
      submitButton.disabled = false; 
    console.log(submitButton.disabled); 
    }
  };

  return (
    <Container>
      <h3>2026 NWSS Organic Nomenclature Competition Registration</h3>
      <p>Fill information below to participate at the competition.</p>

      {error && (
        <div className="error-msg">
          <p>{error}</p>
        </div>
      )}

      <Form onSubmit={handleSubmit} validated={validated} noValidate className='pt-0'> 
        <Form.Group className="mb-3">
          <Form.Label>School District</Form.Label>
          <Form.Control required type='text' id='schoolDistrict' name='schoolDistrict' value={formData.schoolDistrict} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>School Name</Form.Label>
          <Form.Control required type='text' id='schoolName' name='schoolName' value={formData.schoolName} onChange={handleChange} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>City, Province</Form.Label>
          <Form.Control required type='text' id='address' name='address' value={formData.address} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Teacher's Email Address</Form.Label>
          <Form.Control required type='email' id='email' name='email' value={formData.email} onChange={handleChange} />
          <Form.Control.Feedback type='invalid'>Invalid email format</Form.Control.Feedback> 
          <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback> 
        </Form.Group>
        <Form.Group as={Col} md="6" className="mb-3">
          <Form.Label>Number of Students Parcitipating</Form.Label>
          <Form.Control required type='number' id='nstudents' name='nstudents' value={formData.nstudents} onChange={handleChange} min="1"/>
          <Form.Control.Feedback type='invalid'>Number of students participating must be greater than 1. </Form.Control.Feedback> 
          <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback> 
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check 
            required 
            label="I acknowledge that this contest is free for participants and is provided by New Westminster Secondary School Science Club." 
            id="acknowledge" 
            name="acknowledge" 
            checked={formData.acknowledge} 
            onChange={handleChange} 
            className='mb-3'
            feedback="Maybe you should acknowledge this? "
            feedbackType='invalid'
          />
          <Form.Control.Feedback type='invalid'>Maybe you should acknowledge this? </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Check 
            required 
            label="By registering to participate, I agree to invigilate the contests per the instructions provided. (i.e., printing out and distributing the contest, supervising the students participating in the contest, including answering questions in the online survey, and adhering to the time limit = 40 minutes)" 
            id="instructions" 
            name="instructions" 
            checked={formData.instructions} 
            onChange={handleChange} 
            feedback="You must agree before submitting. "
            feedbackType='invalid'
          />
        </Form.Group>
        <Button type='submit' id="submitButton">Submit</Button>
      </Form>
    </Container>
  );
};

export default RegistrationPage;