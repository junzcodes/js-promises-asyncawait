// Promises are great for performance as they can run in the background and resolve and reject
// Promises redunce number of callbacks and nesting with ability to string together multiple 'then' methods.

const ronaldoSucks = false;
const messiRocks = false;

function sucksCallback(callback, errorCallback) {
  if (ronaldoSucks) {
    errorCallback({
      name: "ronaldo",
      message: "rocks!",
    });
  } else if (messiRocks) {
    errorCallback({
      name: "messi",
      message: "sucks!",
    });
  } else {
    callback("you are correct!");
  }
}

sucksCallback(
  (message) => {
    console.log("Callback Success: " + message);
  },
  (error) => {
    console.log("Callback Error: " + error.name + " " + error.message);
  }
);

const sucksPromise = new Promise((resolve, reject) => {
  if (ronaldoSucks) {
    reject({
      name: "ronaldo",
      message: "rocks!",
    });
  } else if (messiRocks) {
    reject({
      name: "messi",
      message: "sucks!",
    });
  } else {
    resolve("you are correct!");
  }
});

sucksPromise
  .then((message) => {
    console.log("Promise Success: " + message);
  })
  .catch((error) => {
    console.log("Promise Error: " + error.name + " " + error.message);
  });

// Promise.All runs an array of promises in parallel after which 'then' and 'catch' are called.
// Promise.All 'then' will send an array of all resolve messages.
// Promise.Race will return as soon as one of the promises is resolved.

const promise1 = new Promise((resolve, reject) => {
  resolve("completed function 1");
});
const promise2 = new Promise((resolve, reject) => {
  resolve("completed function 2");
});
const promise3 = new Promise((resolve, reject) => {
  resolve("completed function 3");
});

Promise.all([promise1, promise2, promise3])
  .then((messages) => {
    console.log(messages);
  })
  .catch((error) => {
    console(error);
  });

Promise.race([promise1, promise2, promise3])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console(error);
  });
