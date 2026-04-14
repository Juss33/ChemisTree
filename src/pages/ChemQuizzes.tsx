import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const ChemQuizzes = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate("/quiz");
  };

  return (
    <Container>
      <div className="page-header"><h1>Quizzes</h1></div>
      <div className="content-grid">
        <div className="feed-container">
          <h2 className="section-title">Solubility</h2>
          <Button variant="light" onClick={goToQuiz} title="Create">
            Start Quiz
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ChemQuizzes;