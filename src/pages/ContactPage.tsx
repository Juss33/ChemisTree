// import { useMutation } from "convex/react";
// import { useState } from "react";
// import { Button, Container, Form } from "react-bootstrap";
// import { api } from "../../convex/_generated/api";

// const ContactPage = () => {
//   const [validated, setValidated] = useState(false); 
//   const [errorMsg, setErrorMsg] = useState(''); 
//   const [formData, setFormData] = useState({
//     name: '', 
//     email: '', 
//     message: '', 
//   }); 
//   const createContact = useMutation(api.contacts.createContact); 
  
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = event.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     const submitButton = document.getElementById("submitButton") as HTMLButtonElement; 
//     event.preventDefault();
//     if (!isFormValid()) return; 

//     submitButton.disabled = true;
//     await createContact(formData)
//       .then(() => {
//         setErrorMsg("Your form has been submitted!"); 
//         setValidated(false); 
//       })
//       .catch((error) => {
//         setErrorMsg('An error occurred while submitting the form. Please try again later.');
//         console.error("Error submitting contact form:", error);
//       })
//       .finally(() => {
//         submitButton.disabled = false;
//       })
//   }

//   const isFormValid = () => {
//     setValidated(true);
//     var isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email);
//     if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim() || !isEmailValid) {
//       setErrorMsg('Please fill in all fields with valid information.');
//       return false;
//     } else {
//       setErrorMsg(''); 
//       return true; 
//     }
//   }
  
//   return (
//     <Container>
//       <h3>Contact us</h3>
//       {errorMsg && (
//         <div className="error-msg">
//           <span>{errorMsg}</span>
//         </div>
//       )}

//       <Form onSubmit={handleSubmit} validated={validated} noValidate>
//         <Form.Group className="mb-3">
//           <Form.Label>Name</Form.Label>
//           <Form.Control required type='text' id='name' name='name' onChange={handleChange}/>
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control required type='email' id='email' name='email' onChange={handleChange}/>
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Message</Form.Label>
//           <Form.Control required as={"textarea"} id='message' name='message' rows={3} onChange={handleChange}/>
//         </Form.Group>
//         <Button type="submit" variant="orange" id="submitButton">Submit</Button>
//       </Form>
//     </Container>
//   );
// };

// export default ContactPage;

import { Container } from "react-bootstrap";

const AboutUsPage = () => {
  return (
      <Container>
        <div className="content-grid">
          <div className="feed-container">
            <h2 className="section-title">Contact Us</h2>
              <form action="https://formsubmit.co/chemistree.ca@gmail.com" method="POST">
                <p>Name:</p>
                <input type="text" name="name" required className="mb-3" placeholder="your full name"></input>
                <p>Email:</p>
                <input type="email" name="email" required className="mb-3" placeholder="your email"></input>
                <p>Subject:</p>
                <input type="text" name="subject" required className="mb-3" placeholder="subject of email"></input>
                <p>Message:</p>
                <textarea name="message" required className="mb-3" placeholder="your message here"></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
        </div>
      </Container>
  );
};

export default AboutUsPage;