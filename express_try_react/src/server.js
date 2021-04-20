const express = require("express");
const cors = require("cors");

const fs = require("fs");
const { text } = require("express");
const e = require("express");

const PORT = 3000;

const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();

const corsOptions = {
  origin: "*",
  // origin: "http://127.0.0.1:3001/public",
  optionsSuccessStatus: 200,
  method: "GET",
};

app.use(cors(corsOptions));

app.use(express.static("public"));

app.post("/questions", jsonParser, function (req, res) {
  let prevAnswers = req.body;
  //если нет тела
  if (!prevAnswers) return req.sendStatus(400);

  //создаем массив вопросов
  let questionArr = [];

  console.log("Request to /questions:", prevAnswers);

  //записываем ответы в файл
  fs.writeFile(
    "answers.json",
    JSON.stringify(prevAnswers, null, 2),
    function (error) {
      if (error) {
        console.log("error writing file");
      }
    }
  );

  let nextSectionName = "";

  //проверяем, не пустое ли тело
  if (!prevAnswers.section) {
    console.log("Body is empty");

    //тогда нужно дать первую секцию
    nextSectionName = "section1";
  } else {
    console.log("Body is not empty");
    let secName = req.body.section.slice(0, -1);
    let secNum = parseInt(req.body.section.substr(-1, 1)) + 1;

    nextSectionName = secName + secNum;
    console.log("next Section: ", nextSectionName);
  }

  //читаем файл
  let myJsonFile = JSON.parse(fs.readFileSync("questions.json", "utf8"));
  //секция
  let questionSection = myJsonFile[nextSectionName];

  if (nextSectionName === "section1") {
    for (let i = 0; i < questionSection.length; i++) {
      let question = questionSection[i];
      let obj = {};

      if (
        ["radio", "check", "selector", "multi-selector"].includes(
          question["type"]
        )
      ) {
        obj = {
          section: nextSectionName,
          questionNum: i,
          type: question["type"],
          text: question["text"],
          options: question["options"],
        };
      } else {
        obj = {
          section: nextSectionName,
          questionNum: i,
          type: question["type"],
          text: question["text"],
        };
      }
      questionArr.push(obj);
    }
  } else if (nextSectionName === "section2") {
    if (prevAnswers["section11"] === "before 2020") {
      for (let i = 0; i < questionSection.length; i++) {
        let question = questionSection[i];

        if (question["type"] === "text-area") {
          let obj = {};
          obj = {
            section: nextSectionName,
            questionNum: i,
            type: question["type"],
            text: question["text"],
          };
          questionArr.push(obj);
        }
      }
    } else {
      if (prevAnswers["section12"] === "art") {
        for (let i = 0; i < questionSection.length; i++) {
          let question = questionSection[i];
          if (question["type"] === "check" && question["subType"] === "art") {
            let obj = {};
            obj = {
              section: nextSectionName,
              questionNum: i,
              type: question["type"],
              text: question["text"],
              options: question["options"],
            };
            questionArr.push(obj);
          }
        }
      } else if (prevAnswers["section12"] === "engineering") {
        for (let i = 0; i < questionSection.length; i++) {
          let question = questionSection[i];
          if (
            question["type"] === "check" &&
            question["subType"] === "engineering"
          ) {
            let obj = {};
            console.log(11);
            obj = {
              section: nextSectionName,
              questionNum: i,
              type: question["type"],
              text: question["text"],
              options: question["options"],
            };
            questionArr.push(obj);
          }
        }
      }
    }
  } else if (nextSectionName === "section3") {
    if (prevAnswers["section20Stroganov"]) {
      for (let i = 0; i < questionSection.length; i++) {
        let question = questionSection[i];
        if (question["subType"] === "Stroganov") {
          console.log(4);
          let obj = {};
          obj = {
            section: nextSectionName,
            questionNum: i,
            type: question["type"],
            text: question["text"],
            options: question["options"],
          };
          questionArr.push(obj);
        }
      }
    }
    if (prevAnswers["section20VGIK"]) {
      for (let i = 0; i < questionSection.length; i++) {
        let question = questionSection[i];
        if (question["subType"] === "VGIK") {
          let obj = {};
          obj = {
            section: nextSectionName,
            questionNum: i,
            type: question["type"],
            text: question["text"],
            options: question["options"],
          };
          questionArr.push(obj);
        }
      }
    }
    if (prevAnswers["section21BMSTU"]) {
      for (let i = 0; i < questionSection.length; i++) {
        let question = questionSection[i];
        if (question["subType"] === "BMSTU") {
          let obj = {};
          obj = {
            section: nextSectionName,
            questionNum: i,
            type: question["type"],
            text: question["text"],
            options: question["options"],
          };
          questionArr.push(obj);
        }
      }
    }
    if (prevAnswers["section21MFTI"]) {
      for (let i = 0; i < questionSection.length; i++) {
        let question = questionSection[i];
        if (question["subType"] === "MFTI") {
          let obj = {};
          obj = {
            section: nextSectionName,
            questionNum: i,
            type: question["type"],
            text: question["text"],
            options: question["options"],
          };
          questionArr.push(obj);
        }
      }
    }
  } else if (nextSectionName === "section4") {
    for (let i = 0; i < questionSection.length; i++) {
      let question = questionSection[i];
      let obj = {};

      if (
        ["radio", "check", "selector", "multi-selector"].includes(
          question["type"]
        )
      ) {
        obj = {
          section: nextSectionName,
          questionNum: i,
          type: question["type"],
          text: question["text"],
          options: question["options"],
        };
      } else {
        obj = {
          section: nextSectionName,
          questionNum: i,
          type: question["type"],
          text: question["text"],
        };
      }
      questionArr.push(obj);
    }
  } else {
    let obj = {};
    obj = {
      type: "end",
    };
    questionArr.push(obj);
  }
  console.log("questionArr: ", questionArr);
  res.json(questionArr);
});

app.get("/answers", jsonParser, function (req, res) {
  console.log("Request to /answers: ", req.body);
  let answFile = JSON.parse(fs.readFileSync("answers.json", "utf8"));
  console.log("typeof answFile: ", typeof answFile);

  let answersArr = [];

  for (let key in answFile) {
    let tempObj = {};
    tempObj[key] = answFile[key];
    answersArr.push(tempObj);
  }
  console.log("AnswersArr: ", answersArr);
  res.json(answersArr);
  // res.json(answFile);
});

app.post("/public", jsonParser, function (req, res) {
  // res.set("Access-Control-Allow-Origin", "*");
  // res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  // res.set("Access-Control-Allow-Headers", "Content-Type");
  console.log("Request received");

  if (!req.body) return req.sendStatus(400);

  if (["section1", "section2", "section3"].includes(req.body.type)) {
    console.log("Request: ", req.body.type);
    let mystrFile = JSON.parse(fs.readFileSync("questions.json", "utf8"));

    let section = mystrFile[req.body.type];

    let objArr = [];

    for (let i = 0; i < section.length; i++) {
      let question = section[i];
      let obj = {};
      if (
        ["radio", "check", "selector", "multi-selector"].includes(
          question["type"]
        )
      ) {
        obj = {
          section: req.body.type,
          questionNum: i,
          type: question["type"],
          text: question["text"],
          options: question["options"],
        };
      } else {
        obj = {
          section: req.body.type,
          questionNum: i,
          type: question["type"],
          text: question["text"],
        };
      }
      objArr.push(obj);
    }
    // console.log("ObjArr: ", objArr);

    res.json(objArr);
  } else {
    console.log("Error request: body = ", req.body);
    //работа с файлом

    // fs.appendFile("answers.txt", "\n empty string", function (error) {
    //   if (error) {
    //     console.log("Error writing file");
    //   }
    //   let fileData = fs.readFileSync("answers.txt", "utf8");
    //   console.log("Async Writing success. File contains: ", fileData);
    // });
  }
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/mainPage.html");
});

app.listen(PORT, () => {
  console.log(`Server is running and listening at http://localhost:${PORT}`);
});
