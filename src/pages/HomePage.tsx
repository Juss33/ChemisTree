import { Feed } from "../components/feed";
import "../styles/SideBar.css";

const HomePage = () => {
  return (
    <>
      <div className="content-container">
        <Feed />

        <div className="content-grid">
          <div className="feed-container">
            <h2>About Us:</h2>
            <p>
              ChemisTREE is a global online platform that brings together chemists,
              aspiring chemists, and motivated students who may lack access to labs,
              mentors, or resources. Our space is designed for collaboration,
              mentorship, and open access to knowledge, offering discussion forums by
              field, a free digital library of textbooks and problem sets, and virtual
              labs and simulations for those without physical lab access.
            </p>
          </div>
        </div>

        <div className="content-grid">
          <div className="feed-container">
            <h2>Mission:</h2>
            <p>
              We are creating a global platform that makes chemistry accessible to
              everyone, connecting students, educators, and professionals in an open
              community for collaboration, mentorship, and research.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;