
import { Link } from "react-router-dom";
import "../../styles/InstructionPage.css";
import { Container } from "react-bootstrap";
import { useRef } from "react";

const InstructionPage = () => {
  const rulesRef = useRef<HTMLDivElement>(null);
  const syllabusRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const policyRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Container>
      <div className="content-grid">
        <div className="feed-container align-items-center">
          <h2>2026 NWSS Organic Nomenclature Competition</h2>
          <Link to="/nwss-competition/registration" className="apply-button" style={{ width: "fit-content" }}>Register for the competition</Link>
        </div>
      </div>
      <div className="content-grid">
        <div className="feed-container">
          <h2 className="section-title" id="about">About the Competition</h2>
          <p>
            The NWS2 Organic Nomenclature Competition is a student-initiated high school organic chemistry nomenclature examination
            that targets any ambitious students from grades 8-12. It embraces rule-based application and subtlety, by asking
            unordinary questions going beyond the school curriculum.
          </p>
          <div>
            <h6>Important Dates</h6>
            <p>Deadline for Registration: Sunday, May 24 2026<br></br>Competition Date: Friday, May 29 2026 
            </p>
          </div>
          <div>
            <h6>In this page</h6>
            <ul>
              <li>
                <a href="#rules" onClick={(e) => { e.preventDefault(); scrollToSection(rulesRef); }} className="mb-1">Instruction and Rules</a>
              </li>
              <li>
                <a href="#syllabus" onClick={(e) => { e.preventDefault(); scrollToSection(syllabusRef); }} className="mb-1">Syllabus</a>
              </li>
              <li>
                <a href="#awards" onClick={(e) => { e.preventDefault(); scrollToSection(awardsRef); }} className="mb-1">Awards</a>
              </li>
              <li>
                <a href="#policy" onClick={(e) => { e.preventDefault(); scrollToSection(policyRef); }} className="mb-1">Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content-grid">
        <div className="feed-container">
          <h2 className="section-title" id="rules" ref={rulesRef}>Instruction and Rules</h2>
          <ol className="mb-0">
            <li className="mb-3">No crying, no cheating, no peekabooing. Respect common courtesies.</li>
            <li className="mb-3">Do NOT turn to the next page until you are told to do so.</li>
            <li className="mb-3">This is a 25 multiple-choice competition with increasing difficulty. Only one answer is correct per question.</li>
            <li className="mb-3">Mark your answers on the answer booklet. <br /> Each correct answer = +1 mark, incorrect = -1 mark, blank = 0.</li>
            <li className="mb-3">Only blank scratch paper, pen, pencils, and erasers are allowed. No digital/computing devices.</li>
            <li className="mb-3">Do not discuss the question in this competition with others in the next 24 hours.</li>
            <li>You have 40 minutes. Good luck!</li>
          </ol>
        </div>
      </div>
      <div className="content-grid">
        <div className="feed-container">
          <h2 className="section-title" id="syllabus" ref={syllabusRef}>Syllabus</h2>
          <p>
            The competition is designed to be challenging, but also aims to make nomenclature more interesting and enjoyable. <br />
            (NO stereochemistry is required for Part A and Part B)
          </p>
          <div>
            <h6>Part A: Naming of Alkanes, Alkene, Alkynes, Cycloalkanes and Cycloalkenes</h6>
            <p>
              Participants should have a solid understanding of naming simple branched hydrocarbon molecules with multiple
              simple alkyl substituents including identifying the longest chain, alphabetical ordering , numbering locants.
              Participants are also expected to memorise root name prefixes up to 10 Carbons. (No complex Substituent in this section.)
            </p>
          </div>
          <div>
            <h6>Part B: Naming of organic molecules with multiple basic function groups</h6>
            <p className="mb-1">
              In addition to Part A, Part B will require Participants to be able to name organic molecules with multiple
              basic function groups including:
            </p>
            <ul className="mb-1">
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
            <p>
              Participants should also know the priority of the function and both the substituent suffix and prefix
              of the function group, as there will be multiple groups included inside a molecule (e.g -OH: Hydroxyl-, -ol).
              Moreover, participants should also know how to name molecules with complex substituents.
            </p>
          </div>
          <div>
            <h6>Part C: Naming of polycyclic alkanes, and using stereochemical descriptors</h6>
            <p>
              In addition to recognizing common functional groups and complex substituents, students are required to apply
              stereochemical descriptors to molecules where appropriate, including E/Z and R/S nomenclature.
              Furthermore, students should demonstrate an understanding of polycyclic alkanes, such as spirocyclic systems
              and fused bicyclic structures, and be able to accurately describe and analyze their structural features.
            </p>
          </div>
          <div>
            <h6>Useful Resource</h6>
            <p>
              <a href="https://www.chem.ucalgary.ca/courses/351/WebContent/orgnom/index.html">
                https://www.chem.ucalgary.ca/courses/351/WebContent/orgnom/index.html
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="content-grid">
        <div className="feed-container">
          <h2 className="section-title" id="awards" ref={awardsRef}>Awards</h2>
          <p>
            Certifications are divided into Junior and Senior divisions. Whereas:<br/>
            Junior - Any student currently attending below grade 10<br/>
            Senior - Any Students currently attending in grades 10-12
          </p>
          <p>
            In each division the available awards are<br/>

            Junior<br/>
             - Junior Participation Award: Will be awarded upon participation<br/>
             - Junior Cu (Copper) Award: Top ~50% of the participants<br/>
             - Junior Ag (Sliver) Award: Top ~20% of the participants<br/>
             - Junior Au (Gold) Award: Top ~10% of the participants<br/>
            Senior<br/>
             - Senior Cu (Copper) Award: Top ~30% of the participants<br/>
             - Senior Ag (Sliver) Award: Top ~15% of the participants<br/>
             - Senior Au (Gold) Award: Top ~5% of the participants<br/>
          </p>
          <div>
            <h6>Additional Awards</h6>
            <p>
              Pd (Platinum) Award: School Champion (for schools with more than 4 students registered) <br/>
              Cl (Chlorine) Award: For those participants who achieved a score of -25 <br/>
              <span className="text-secondary fst-italic">I mean, it’s still a skill!</span>
            </p>
          </div>
        </div>
      </div>
      <div className="content-grid">
        <div className="feed-container">
          <h2 className="section-title" id="policy" ref={policyRef}>Policy</h2>
          <p>
            ChemisTREE reserves the right to implement and enforce rules to preserve the integrity and fairness 
            of this competition. Where there is evidence of academic misconduct identified, scores may be 
            disqualified.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default InstructionPage;