const { user } = require("./functions.js");

let response = user.newUser(
  36,
  "Vinicius Carvalho",
  "vinicius@gmail.com",
  "123456",
  "admin"
);
console.log(response);

response = user.updateData(
  30,
  "Vinicius Alves de Carvalho",
  "vinicius.carvalho@gmail.com",
  "888888",
  "student"
);
console.log(response);

response = user.login("vinicius.carvalho@gmail.com", "888888");
if (response) console.log("Login realizado com sucesso");
else console.log("Ops, Erro ao realizar o login!");

response = user.logout(response)
if (response) console.log("Logout realizado com sucesso!");
