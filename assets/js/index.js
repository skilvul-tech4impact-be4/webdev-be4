const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

async function register() {
  const response = await fetch(
    "https://6453c91ac18adbbdfea7abf4.mockapi.io/register",
    {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    }
  );
  const data = await response.json();
  console.log(data);
}
register();
