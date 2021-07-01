# SERVER
1. `npm install`
2. `npm run dev-server`


if the server hangs then stop the server `CRTL-C`
then do `npm run dev-server` again

This project uses `nodemon` which will detect changes in the code 
and update server automatically. (hot-reload)

how to cal the server
```javascript

// if using 

// to make a GET
const getUsers = function () {
  return fetch('http://localhost:7078/users').then(response => {
    if (response.status === 200) {
      return response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw response;
    } 
  })
}

//to make a POST
const postUsers = function (data) {
  return fetch('http://localhost:7078/users', 
    {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body:  JSON.stringify(data)
    }
  ).then(response => {
    if (response.status === 200) {
      return response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw response;
    }
  })
}


// if using React
// need to import Hooks
import { useEffect, useState } from 'react';
//......React Component function
let [users, setUsers] = useState()
let [postUsers, setPostUsers] = useState()
  useEffect(() => {
    getUsers().then(resp=> {
      setUsers(resp)
    })
    postUsers([{name: 'Fredd'}, {name: 'Natalie'}]).then(resp=> {
      setPostUsers(resp)
    }
  }, [])
/// use down here....

```

## PROMISES

`node src/promises.js`

