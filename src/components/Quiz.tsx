import { useState } from "react";

type QuizType = {
    title: string;
    questions: {
        question: string;
        options: string[];
        answer: number;
}[];
};

export default function Quiz({ quiz }: { quiz: QuizType }) {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (index: number) => {
        if (index === quiz.questions[current].answer) {
            setScore((prev) => prev + 1);
        }

        if (current + 1 < quiz.questions.length) {
            setCurrent((prev) => prev + 1)
        } else {
            setFinished(true);
        }
    }
    if (finished) {
        return (
            <div>
                <h2>{quiz.title} Complete</h2>
                <p>
                    Score: {score} / {quiz.questions.length}
                </p>
            </div>
        )
    }

    const q = quiz.questions[current];

    return (
        <div>
            <h2>{quiz.title}</h2>
            <p>
                Question {current + 1} / {quiz.questions.length}
            </p>

            <h3>{q.question}</h3>

            {q.options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(i)}>
                    {opt}
                </button>
            ))}
        </div>
    )
}
