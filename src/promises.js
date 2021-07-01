
let p1 = function () {
  // make a promise like this
  // this promise will resolve with the value "Hello World!"
  return new Promise((resolve, reject) => {
    resolve('Hello World!')
  })
}

// this is how we call a function that returns a Promise
// the promise resolve value is returned in a property called
// then(fuc)   fuc is a function that has 1 parameter, 
// the value of the parameter in the resolve() for the promise
p1().then(resp => {
  console.log('p1 response')
  console.log(resp)
  console.log('')
})


let p2 = function () {
  // make a promise like this
  // this promise will resolve with the value "Hello World!"
  return new Promise((resolve, reject) => {
    reject('Hello World!')
  })
}


// this does not call then() this will call catch() instead
// this is because the reject() of the promise was given a
// value
p2().then(resp => {
  console.log(resp)
}).catch(ex => {
  console.log('p2 response')
  console.log("THIS IS AN ERROR")
  console.log('this is the catch value')
  console.log(ex)
  console.log('')
})


let p3 = function (num) {
  return new Promise((resolve, reject) => {
    try {
      resolve(num.substring(1))
    } catch(ex) {
      reject(ex)
    }
  })
}

// ignore the setTimeout
setTimeout(() => {
// this will call then() because it did not throw an error
p3('first character is erased').then(resp => {
  console.log('p3 then() response')
  console.log(resp)
  console.log()
})

// this will call catch() because it did throw an error
// this will happen because of the undefined parameter
p3().catch(ex => {
  console.log('p3 catch() response')
  console.log(ex.message)
  console.log()
})

}, 100)


