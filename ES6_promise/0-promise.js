// 0-promise.js

function getResponseFromAPI() {
    // Returning a Promise that resolves with a sample response
    return new Promise((resolve, reject) => {
      // Simulating an async operation (e.g., API call)
      resolve("Response from API");
    });
  }
  
  export default getResponseFromAPI;
  