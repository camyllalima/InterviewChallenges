import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const style = {
  container: {
    padding: "20px",
    border: "1px solid #E0E0E0",
    borderRadius: "15px",
    width: "max-content",
    marginBottom: "40px",
  },
  question: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  options: {
    marginBottom: "5px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#FFF",
    fontSize: "14px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  feedback: {
    marginTop: "10px",
    fontSize: "14px",
  },
};

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct: "Paris",
    },
    {
      question: "What is the capital of Germany?",
      options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      correct: "Berlin",
    },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    const result = questions[currentQuestion].correct;

    if (selectedOption === result) {
      setFeedback("Correct!");
      setScore((prevScore) => prevScore + 1);
    }

    if (selectedOption !== result) {
      setFeedback("Incorrect!");
    }
  };

  const handleNextQuestion = () => {
    setFeedback("");
    setSelectedOption(null);
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinish(true);
      setFeedback(
        `Test completed! You scored ${score} out of ${questions.length}!`
      );
    }
  };

  return (
    <div style={style.container}>
      {!finish && (
        <div>
          <div id="question" style={style.question}>
            {questions[currentQuestion].question}
          </div>
          <div style={style.options}>
            {questions[currentQuestion].options?.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option${index + 1}`}
                  name="options"
                  value={option}
                  checked={selectedOption === option}
                  disabled={!!feedback}
                  onChange={handleOptionChange}
                />
                <label htmlFor={`option${index + 1}`}>{option}</label>
              </div>
            ))}
          </div>
          {!feedback && selectedOption && (
            <button style={style.button} id="submitBtn" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      )}
      {feedback && (
        <div id="feedback" style={style.feedback}>
          {feedback}
        </div>
      )}
      {feedback && !finish && (
        <button style={style.button} onClick={handleNextQuestion}>
          {currentQuestion < questions.length - 1 ? "Next question" : "Finish"}
        </button>
      )}
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<QuizApp />);
