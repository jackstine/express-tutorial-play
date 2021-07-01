1. `npm install`
2. `npm run dev-server`


if the server hangs then stop the server `CRTL-C`
then do `npm run dev-server` again

This project uses `nodemon` which will detect changes in the code 
and update server automatically. (hot-reload)

how to cal the server
```javascript
// to make a GET
fetch('http://localhost:7078/users').then(resp => {
  if (response.status === 200) {
    return response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw response;
  } 
})

//to make a POST
fetch('http://localhost:7078/users', 
  {
    method: 'POST'
    headers: {"Content-Type": "application/json"},
    body:  JSON.stringify(data)
  }
).then(resp => {
  if (response.status === 200) {
    return response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw response;
  }
})

```

