import { Container } from "react-bootstrap";
import { Feed } from "../components/feed";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Container>
        <Feed />
      </Container>
    </>
  );
};

export default HomePage;