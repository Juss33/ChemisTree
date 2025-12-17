import { Feed } from "../components/feed";

const HomePage = () => {
  return (
    <div className="content-container">
      <Feed/>



      <div className="content-grid">
        <div className="feed-container">
          <h2>About Us:</h2>
          <p>ChemisTREE is a global online platform that brings together chemists, aspiring chemists,
             and motivated students who may lack access to labs, mentors, or resources.
              Our space is designed for collaboration, mentorship, and open access to knowledge,
               offering discussion forums by field, a free digital library of textbooks and problem sets,
                and virtual labs and simulations for those without physical lab access. 
                Through mentorship networks, students can connect with university mentors and professionals, 
                while our ChemPen Journal provides an open-access, student-led space to publish essays, 
                reviews, and small projects.
                Beyond resources, our platform creates opportunities: an Open Research Hub for collaborative projects, 
                blogs and storytelling to share experiences, and global competitions, webinars,
                 and Q&A sessions with professors, researchers, and industry leaders. 
                 We focus on underserved communities, supporting students in rural or developing regions with mentorship, 
                 guidance, and mini-grants for lab kits, internet access, or competition fees. By fostering inclusion 
                 and accessibility, we ensure that passion for chemistry can flourish regardless of circumstance.
                For professors and professionals, the platform offers meaningful impact: fulfilling broader
                 impact requirements for research grants, connecting with motivated students who may become 
                 future researchers, sharing teaching materials for recognition, and co-authoring student work
                  through the ChemPen Journal. It also provides international networking opportunities and a 
                  lasting outlet for public engagement. Together, we are creating an open, diverse, and collaborative
                   chemistry community where access is no longer a barrier but a foundation.
          </p>
        </div>
      </div>
      <div className="content-grid">
        <div className="feed-container">
          <h2>Mission:</h2>
          <p>
            We are creating a global platform that makes chemistry accessible to everyone,
             connecting students, educators, and professionals in an open community for collaboration, 
             mentorship, and research. By offering free resources, virtual labs, and publishing opportunities, 
             we break down barriers to scientific discovery, especially for underserved communities, so passion
              for chemistry can grow into impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;