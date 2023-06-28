import {uploadPhoto, createUser} from './utils';

/**
 * Handles the profile signup process.
 * @return {Promise} A promise that resolves when the profile signup is completed.
 */
export default function handleProfileSignup() {
  return Promise
      .all([uploadPhoto(), createUser()])
      .then((res) => {
        console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
      })
      .catch(() => console.log('Signup system offline'));
}
