import { useNavigate } from "react-router-dom";

export default function QuizSelect() {
  const navigate = useNavigate();

  return (<div>
    <h1>Select a Quiiz</h1>

    <button onClick={() => navigate("/quiz/acidbase")}>Acidbase</button>
  </div>)
}