- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.

let p1 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("1")},1000)
} )

let p2 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("2")},1000)
} )

let p3 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("3")},1000)
} )

let p4 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("4")},1000)
} )

let allP = Promise.all([p1,p2,p3,p4])


- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.

let users = ["john","gary","joseph","tally","snow"]

let appP1 = Promise.all(users.map((user) => fetch(`https://api.github.com/users/${user}`).then((res) => res.json()))).then((res) => {
  res.forEach(r => console.log(r.followers))
})

- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow

  let u1 = fetch('https://random.dog/woof.json').then((res) => res.json())

  let u2 = fetch('https://aws.random.cat/meow').then((res) => res.json())

  let u3 = Promise.race([u1,u2]).then((res) => console.log(res))

- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);
```
Promise.all won't work

const four = Promise.allSettled([one,two,three])

- What will be the output of the following code snippet? How much time will it take for the promise to resolve?

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);
```
after 1000