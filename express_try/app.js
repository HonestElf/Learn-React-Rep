const express = require("express");

const PORT = 3000;

const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();

app.use(express.static("public"));

app.post("/user", jsonParser, function (request, response) {
  console.log("request.body", request.body);
  console.log("request.body.userName", request.body.userName);
  if (!request.body) return response.sendStatus(400);

  request.body.userName += " - san";
  response.json(request.body); // отправляем пришедший ответ обратно
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running and listening at http://localhost:${PORT}`);
});
