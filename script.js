'use strict';
(function() {
    window.addEventListener('load', init);

    function init() {
        // an introduction to promises (showing standard behavior)
let superSecret = new Promise((resolve, reject) => {
  resolve('promise has been resolved');
});

let superSecretAndImportant = new Promise((resolve, reject) => {
  reject('promise has been rejected');
});


let superDuperSecretAndImportant = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('very important task was successful');
  }, 10000)
});


// chaining using .then and .catch
let b = new Promise((resolve, reject) => {
  let number = 2 * 2;
  // let number = 2 * 3;
	if (number === 4) {
		resolve('promise resolved!');
	} else {
		reject('promise rejected');
	}
});

b.then(console.log).catch(console.error);

// constructing a promise - exercise 1 solution
let a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('first promise down!');
  }, 5000);
});

a.then(console.log);

// showing asynchronous code
let c = new Promise((resolve, reject) => {
  setTimeout(() => {
    let number = 2 * 2;
    if (number === 4) {
      resolve('promise resolved!');
    } else {
      reject('promise rejected');
    }
  }, 4000);
});
c.then(console.log).catch(console.error);
console.log("I am below the promise");

// using promise.all (optional)
let p1 = new Promise((resolve, reject) => {
  resolve("got it!");
});

let p2 = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve("got it after a few seconds");
  }, 3000);
});

let all = Promise.all([p1, p2]);
        }

    

  
})();