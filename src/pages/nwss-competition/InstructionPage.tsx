
import "../../styles/InstructionPage.css";

const InstructionPage = () => {
  return (
    <div className="testing-container">
      <div className="testing-content">
        <div className="testing-header">
          <h1>2026 NWSS Organic Nomenclature Competition</h1>
        </div>

        <div className="testing-card">
          <h2>Instructions and Rules:</h2>
          <ol>
            <li>No crying, no cheating, no peekabooing. Respect common courtesies.</li>
            <li>Do NOT turn to the next page until you are told to do so.</li>
            <li>This is a 25 multiple-choice competition with increasing difficulty. Only one answer is correct per question.</li>
            <li>Mark your answers on the answer booklet. Each correct answer = +1 mark, incorrect = -1 mark, blank = 0.</li>
            <li>Only blank scratch paper, pen, pencils, and erasers are allowed. No digital/computing devices.</li>
            <li>You have 40 minutes. Good luck!</li>
          </ol>
        </div>

        <div className="testing-action">
          <a href="/nwss-competition/registration" className="apply-button">Go to apply for the competition</a>
        </div>
      </div>
    </div>
  );
};

export default InstructionPage;