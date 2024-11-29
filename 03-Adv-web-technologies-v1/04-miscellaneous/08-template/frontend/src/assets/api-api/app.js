let apiURL = "https://jsonplaceholder.typicode.com/todos/";

const allTodos = document.querySelector(".all-todos");
const main = document.querySelector("#main");
// console.log(allTodos);

allTodos.addEventListener("click", () => {
  main.textContent = "";
  fetch(apiURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (let item of data) {
        const div = document.createElement("div");
        div.classList.add("todo");

        const h2 = document.createElement("h2");
        h2.innerHTML = item.title;
        div.appendChild(h2);
        // console.log(h2);

        const userId = document.createElement("p");
        userId.innerHTML = `User Id : ${item.userId}`;
        div.appendChild(userId);

        const isCompleted = document.createElement("p");
        isCompleted.innerHTML = `Is Completed : ${item.completed}`;
        div.appendChild(isCompleted);

        if (item.completed == false) {
          div.classList.add("red-bd");
        } else {
          div.classList.add("green-bd");
        }

        main.appendChild(div);
      } //for loop
    });
});

const myForm = document.querySelector(".my-form");
const myInput = document.querySelector(".my-input");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  main.textContent = "";
  apiURL = apiURL;
  console.log(apiURL);
  fetch(apiURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let item of data) {
        if (item.userId == myInput.value) {
          const div = document.createElement("div");
          div.classList.add("todo");

          const h2 = document.createElement("h2");
          h2.innerHTML = item.title;
          div.appendChild(h2);
          // console.log(h2);

          const userId = document.createElement("p");
          userId.innerHTML = `User Id : ${item.userId}`;
          div.appendChild(userId);

          const isCompleted = document.createElement("p");
          isCompleted.innerHTML = `Is Completed : ${item.completed}`;
          div.appendChild(isCompleted);

          if (item.completed == false) {
            div.classList.add("red-bd");
          } else {
            div.classList.add("green-bd");
          }

          main.appendChild(div);
        } // for loop
      }
      myInput.value = "";
    });
});
