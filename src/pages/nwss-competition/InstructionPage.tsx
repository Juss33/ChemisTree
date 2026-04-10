
import { Link } from "react-router-dom";
import "../../styles/InstructionPage.css";
import { Container } from "react-bootstrap";

const InstructionPage = () => {
  return (
    <Container>
      <div className="content-grid">
        <div className="feed-container" style={{alignItems: "center"}}>
          <h2 className="mb-4">2026 NWSS Organic Nomenclature Competition</h2>
          <Link to="/nwss-competition/registration" className="apply-button" style={{width: "fit-content"}}>Go to apply for the competition</Link>
        </div>
      </div>
      <div className="content-grid">
        <div className="feed-container">
          <h2 className="section-title">About the Competition</h2>
          <p>
            The NWS2 Organic Nomenclature Competition is a student-initiated high school organic chemistry nomenclature examination 
            that targets any ambitious students from grades 8-12. It embraces rule-based application and subtlety, by asking 
            unordinary questions going beyond the school curriculum.
          </p>
        </div>
      </div>
      <div className="content-grid">
        <div className="feed-container">
          <h2 className="section-title">Instruction and Rules: </h2>
          <ol className="mb-0">
            <li className="mb-3">No crying, no cheating, no peekabooing. Respect common courtesies.</li>
            <li className="mb-3">Do NOT turn to the next page until you are told to do so.</li>
            <li className="mb-3">This is a 25 multiple-choice competition with increasing difficulty. Only one answer is correct per question.</li>
            <li className="mb-3">Mark your answers on the answer booklet. <br/> Each correct answer = +1 mark, incorrect = -1 mark, blank = 0.</li>
            <li className="mb-3">Only blank scratch paper, pen, pencils, and erasers are allowed. No digital/computing devices.</li>
            <li>You have 40 minutes. Good luck!</li>
          </ol>
        </div>
      </div>
      <div className="content-grid">
        <div className="feed-container">
          <h2 className="section-title">Syllabus</h2>
          <p>
            The competition is designed to be challenging, but also aims to make nomenclature more interesting and enjoyable. <br/>
            (NO stereochemistry is required for Part A and Part B) 
          </p>
          <h6>Part A: Naming of Alkanes, Alkene, Alkynes, Cycloalkanes and Cycloalkenes</h6>
          <p>
            Participants should have a solid understanding of naming simple branched hydrocarbon molecules with multiple 
            simple alkyl substituents including identifying the longest chain, alphabetical ordering , numbering locants. 
            Participants are also expected to memorise root name prefixes up to 10 Carbons. (No complex Substituent in this section.)
          </p>
          <h6>Part B: Naming of organic molecules with multiple basic function groups</h6>
          <p>
            In addition to Part A, Part B will require Participants to be able to name organic molecules with multiple 
            basic function groups including:
            <ul>
              <li>Alkane</li>
              <li>Alkene</li>
              <li>Alkyne</li>
              <li>Benzene</li>
              <li>Alcohol</li>
              <li>Aldehyde</li>
              <li>Ketone</li>
              <li>Carboxylic acid</li>
              <li>Acid Anhydride</li>
              <li>Ester</li>
              <li>Ether</li>
              <li>Amine</li>
              <li>Amide</li>
              <li>Nitrile</li>
              <li>Haloalkane</li>
              <li>Thiol</li>
            </ul>
            Participants should also know the priority of the function and both the substituent suffix and prefix 
            of the function group, as there will be multiple groups included inside a molecule (e.g -OH: Hydroxyl-, -ol). 
            Moreover, participants should also know how to name molecules with complex substituents. 
          </p>
          <h6>Part C: </h6>
          <p>
            i dunno
          </p>
        </div>
      </div>

      
    </Container>
  );
};

export default InstructionPage;