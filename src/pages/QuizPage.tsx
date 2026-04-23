import { useParams } from "react-router-dom";
import quizzes from "../Quizzes";
import Quiz from "../components/Quiz";

export default function QuizPage() {
    const { id } = useParams();

    const quiz = quizzes[id as keyof typeof quizzes];

    if (!quiz) return <div>Quiz not found</div>;

    return <Quiz quiz={quiz} />
}