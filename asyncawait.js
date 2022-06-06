// Warp inside a function with the async keyword prefix when using async await
// use await keyword for any async code to return the result of the promise being executed

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making a request to ${location}`);
    if (location === "Google") resolve("Google says hi!");
    else reject("Google says nuh uh!");
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response...");
    resolve(`Extra Information: ${response}`);
  });
}

// makeRequest("FB")
//   .then((response) => {
//     console.log("Received response!");
//     return processRequest(response);
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function doWork(location) {
  try {
    const response = await makeRequest(location);
    console.log("Received response!");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
}

doWork("MS");
