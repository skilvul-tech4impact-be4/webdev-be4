// const username = document.getElementById("username").value;
// const password = document.getElementById("password").value;

// async function register() {
//   const response = await fetch(
//     "https://6453c91ac18adbbdfea7abf4.mockapi.io/register",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//     }
//   );
//   const data = await response.json();
//   console.log(data);
// }
// register();

const urlRegister = "https://6453c91ac18adbbdfea7abf4.mockapi.io/register";
function register() {
  const user = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  console.log(user);
  fetch(urlRegister, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  }).then((response) =>
    response.json().then((value) => {
      console.log("masuk");
      console.log(value);
    })
  );
  window.open("tabel.html");
}
register();
