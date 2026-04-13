import { Container } from "react-bootstrap";

const UpdatesPage = () => {
  return (
    <>
      <Container>
        <div className="content-grid">
          <div className="feed-container">
            <h2>RELEASE v1.0</h2>
            <b>Content-Features</b>
            <ul>
              <li>Introduced Communities</li>
              <ul>
                <li>Posts w/ image upload</li>
                <li>Comments</li>
                <li>Upvotes & downvotes</li>
              </ul>
              <li>Introduced Contact form</li>
              <li>Introduced Trending Tab</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UpdatesPage;