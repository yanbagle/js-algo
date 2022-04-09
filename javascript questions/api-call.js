fetch('https://ghibliapi.herokuapp.com/films', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json()) // response.json turns response into js object 