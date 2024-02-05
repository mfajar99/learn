console.log("OK");

const endpoint = "https://reqres.in/api/users/3";

// console.log(fetch(endpoint));

// get data fetch
// fetch(endpoint)
//   .then((result) => result.json())
//   // get data
//   // .then((data) => console.log(data));
//   .then(({ data }) => console.log(data));

// get data async
// async function hitAPI() {
//   const api = await fetch(endpoint)
//   // get data
//   // const data  = await api.json()
//   const { data } = await api.json()
//   console.log(data);
// }

// hitAPI();

// post data
fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "fajar@gmail.com",
    firstName: "fajar"
  }),
})

  .then((result) => result.json())
  .then((data) => console.log(data));


