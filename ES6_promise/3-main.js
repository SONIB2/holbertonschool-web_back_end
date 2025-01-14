// utils.js

function uploadPhoto() {
    return new Promise((resolve, reject) => {
      // Simulate an upload process with a timeout
      setTimeout(() => {
        resolve({ body: 'photo-profile-1' });
      }, 1000);
    });
  }
  
  function createUser() {
    return new Promise((resolve, reject) => {
      // Simulate user creation with a timeout
      setTimeout(() => {
        resolve({ firstName: 'Guillaume', lastName: 'Salva' });
      }, 1500);
    });
  }
  
  export { uploadPhoto, createUser };
  