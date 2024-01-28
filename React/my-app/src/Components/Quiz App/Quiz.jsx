import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [questions, setQuestions] = useState([]);
  let [currentIndex, setcurrentIndex] = useState(0);

  useEffect(function () {
    getDataFromApi();
  }, []);

  function getDataFromApi() {
    fetch("https://the-trivia-api.com/v2/questions")
      .then((res) => res.json())
      .then((res) => {
        res.map(function (item) {
          item.options = [...item.incorrectAnswers, item.correctAnswer];
          item.options = shuffle(item.options);
        });
        setQuestions(res);

        // console.log(res)
      });
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // Used like so
  var arr = [2, 11, 37, 42];
  shuffle(arr);
  // console.log(arr);

  if (!questions.length) {
    return (
      <h1>
        <img
          src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1265.gif"
          alt=""
        />
      </h1>
    );
  }

  function restart() {
    setcurrentIndex(0);
  }

  function nextQuestion() {
    setcurrentIndex(currentIndex + 1);
  }

  return (
    <div className="App-header">
      <h4>{questions[currentIndex].question.text}</h4>

      {questions[currentIndex].options.map(function (data) {
        return (
          <div>
            <input type="radio" value={data} name="ques" id="" /> {data}
          </div>
        );
      })}
      {currentIndex === questions.length - 1 ? (
        <button onClick={restart}>Restart</button>
      ) : (
        <button onClick={nextQuestion}>Next</button>
      )}
    </div>
  );
}

export default App;
