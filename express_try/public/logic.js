"use strict";
console.log("Script loaded");

function sendAndGetInfo() {
  // получаем данные формы
  let registerForm = document.forms["registerForm"];
  let userName = registerForm.elements["userName"].value;
  let userAge = registerForm.elements["userAge"].value;
  // сериализуем данные в json
  let user = JSON.stringify({
    userName: userName,
    userAge: userAge,
  });

  // await нельзя в синхронной функции, нужно изменить с использованием async
  // let response = await fetch('/user', {
  //   method: 'POST',
  //   headers: {
  //     'Content-type':'application/json; charset=utf-8'
  //     },
  //     body: user
  // });
  // или переписать с промисами
  fetch("/user", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: user,
  })
    .then((response) => response.json())
    .then((results) => {
      console.log("result: ", results);
      let newDiv = document.createElement("div");
      newDiv.className = "newDivElement";
      newDiv.innerHTML = `<p>User name: ${results.userName} and user age: ${results.userAge}</p>`;
      document.body.appendChild(newDiv);
      console.log(results.userName, "-", results.userAge); // смотрим ответ сервера
    });
  // старый метод
  // let request = new XMLHttpRequest();
  // // посылаем запрос на адрес "/user"
  // request.open("POST", "/user", true);
  // request.setRequestHeader("Content-Type", "application/json");
  // request.addEventListener("load", function () {
  //   // получаем и парсим ответ сервера
  //   let receivedUser = JSON.parse(request.response);
  //   let newDiv = document.createElement("div");
  //   newDiv.className = "newDivElement";
  //   newDiv.innerHTML = `<p>User name: ${receivedUser.userName} and user age: ${receivedUser.userAge}</p>`;
  //   document.body.appendChild(newDiv);
  //   console.log(receivedUser.userName, "-", receivedUser.userAge); // смотрим ответ сервера
  // });
  // request.send(user);
}

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  sendAndGetInfo();
});
