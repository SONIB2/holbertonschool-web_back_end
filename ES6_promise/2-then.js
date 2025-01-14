function handleResponseFromAPI(promise) {
    promise
      .then(() => {
        // Resolve with the status and body object
        console.log('Got a response from the API');
        return { status: 200, body: 'success' };
      })
      .catch(() => {
        // Reject with an empty Error object
        console.log('Got a response from the API');
        return new Error();
      });
  }
  
  export default handleResponseFromAPI;