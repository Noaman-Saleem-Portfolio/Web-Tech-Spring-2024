let apiUrl = "https://api.github.com/users/";
// Noaman - Saleem - Portfolio;

const userForm = document.getElementById("user-form");
const responseMessage = document.getElementById("response-message");
const input = document.getElementById("username");

// console.log(userForm);

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
  apiUrl = apiUrl + input.value;
  console.log(apiUrl);

  fetch(apiUrl)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const name = data.name;
      const login = data.login;
      responseMessage.innerHTML = `<h2>Name: ${name}</h2>
                                   <p>Username : ${login}</p>`;
      const imageNode = document.createElement("img");
      imageNode.src = data.avatar_url;
      console.log(imageNode);
      responseMessage.appendChild(imageNode);
    });
  input.value = "";
    apiUrl = "https://api.github.com/users/";
});

