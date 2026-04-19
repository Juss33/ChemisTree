import Quiz from "../components/Quiz";
import quizzes from "../Quizzes";

export default function Page() {
  return <Quiz quiz={quizzes.acidbaseQuiz} />
}