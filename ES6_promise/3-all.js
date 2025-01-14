// 3-all.js

import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  // Use Promise.all() to handle multiple promises
  Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      // Destructure the responses from both promises
      const [photo, user] = responses;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      // Log error message in case of a failure
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
