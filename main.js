
let users = {};
for (let i = 1; i <= 10; i++) {
   let name = prompt("Введите имя пользователя:");
   let age = prompt("Введите возраст пользователя:");
   
   users[i] = {
       name: name,
       age: age
   };
}
for (let id in users) {
   console.log(`пользователь - ${id}`);
   console.log(`Имя - ${users[id].name}`);
   console.log(`Возраст - ${users[id].age}`);
}
console.log(users);






