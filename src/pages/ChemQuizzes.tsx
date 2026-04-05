import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const navigate = useNavigate();

const goToQuiz = () => {
    navigate("/quiz");
  };
const ContactPage = () => {
  return (
    <>
      <Container>
        <div className="content-grid">
            <div className="feed-container">
                <h2 className="section-title">Solubility</h2>
                <Button variant="light" onClick={goToQuiz} title="Create">
                </Button>
            </div>
        </div>
      </Container>
    </>
  );
};

export default ContactPage;