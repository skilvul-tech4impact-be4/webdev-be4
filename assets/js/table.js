const url = "https://6453c91ac18adbbdfea7abf4.mockapi.io/register";

fetch(url, { method: "GET" })
  .then((response) => response.json())
  .then((value) => {
    for (let i = 0; i < value.length; i++) {
      document.getElementById("test").innerHTML += `
          
            <tr>
              <th scope="row">${value[i].id}</th>
              <td>${value[i].username}</td>
              <td>${value[i].harga}</td>
              <td>${value[i].metode}</td>
              
            </tr>
    
        `;
    }
  });
