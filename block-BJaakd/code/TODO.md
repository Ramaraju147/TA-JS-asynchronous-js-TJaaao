1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js
// Your code
let l1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Promise Resolved!')
    },1000)
})

l1.then((response) => console.log(response))
```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
// Your code
let l2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject('Rejected Promise!')
    },1000)
})

l2.catch((error) => console.log(error))
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

```js
// Your code
let l3 = new Promise((resolve,reject) => {
    reject('Rejected Promise!')
})

l3.catch((error) => {console.log(error)}).finally(()=> {
    console.log('Promise Settled!')
})
```

4. What will be the output of the code below.

```js
console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');
```
'A','D','C','B'

5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

```js
// Your code
function wait(time){
return new Promise((resolve,reject) => {
    setTimeout(()=>{resolve()},time)
})
}
```

6. Do the following:

- Create a new promise
- Resolve with 21
- Use `.then` and return adding `10` to the value you will get as parameter
- Use `.then` and return adding `100` to the value you will get as parameter
- Use `.then` and check if the value you get is greater than `100` throw new error with any message
- Catch the error using `.catch`

```js
// Your code
Promise.resolve(21).then((response) => response+10).then((res) => res+100).then((res) => {
    if(res>100){
        throw new Error('Greater than expected')
    }
}).catch((err) => console.log(err))
```

7. Do the following:

- Create a new promise
- Resolve the promise with `['A']`
- Use `.then` and concat `B` into the parameter and return
- Use `.then` and return and object like `{0: 'A', 1: 'B'}`
- Use `.then` and log the value

```js
// Your code
Promise.resolve(['A']).then((res) => {
    res.push('B')
    return res
    }).then((res) => {
        let obj = {}
        res.forEach((e,i) => {
            obj[i] = e
        })
        return obj
    }).then((res) => console.log(res))
```

8. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Chain `.then` on above and return `3` also check the value you get access to by logging
- Chain `.then` on above and return `4` also check the value you get access to by logging

```js
// Your code
let first = Promise.resolve(1)
first.then((res) => {
    console.log(res);
    return 2;
}).then((res) => {
    console.log(res);
    return 3;
}).then((res) => {
    console.log(res);
    return 4;
})
```

9. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Use `.then` on `first` and return `3` also check the value you get access to by logging
- Use `.then` on `first` and return `4` also check the value you get access to by logging

```js
// Your code
let first = Promise.resolve(1)
first.then((res) => {
    console.log(res);
    return 2;
})
first.then((res) => {
    console.log(res);
    return 3;
})
first.then((res) => {
    console.log(res);
    return 4;
})
```

10. Try to understand the difference between the problem 8 and 9. Write your observation.

without chaining response is not passed over to next then

11. Do the following

- Create a promise and resolve it with `John`
- Use `.then` and return another promise that resolves with `Arya`
- Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
- Use `.then` to log the value

```js
// Your code
Promise.resolve('John').then(() => 'Arya').then((res)=> {
    console.log(res)
    return new Promise((resolve,reject) => setTimeout(()=> resolve('Bran'),2000))
}).then((res) => console.log(res))
```
