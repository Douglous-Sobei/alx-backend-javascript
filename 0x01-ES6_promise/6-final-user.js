import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

/**
 * Handles the profile signup process by calling signUpUser and uploadPhoto functions.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the photo file.
 * @return {Promise<Array>} A promise that resolves with an array of objects containing the status and value/error of each promise.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
      .then((results) => results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      })));
}
