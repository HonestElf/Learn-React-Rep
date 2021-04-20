export const getQuestion = (userData) => {
  console.log("This is getQuestion api: user data:", userData);
  return fetch("http://127.0.0.1:3000/public", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  }).then((response) => response.json());
};

export const getNextQuestions = (useranswers) => {
  console.log("This is getNextQuestion api: user answers: ", useranswers);
  return fetch("http://127.0.0.1:3000/questions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(useranswers),
  }).then((response) => response.json());
};

export const getAnswers = () => {
  console.log("This is get answers api");

  return fetch("http://127.0.0.1:3000/answers", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
};
