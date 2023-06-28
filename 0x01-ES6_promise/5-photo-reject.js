import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Uploads a photo with the provided filename.
 * @param {string} filename - The name of the photo file.
 * @return {Promise} A promise that rejects with an error indicating that the photo cannot be processed.
 */
export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
      .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
      .then((res) => (
        res.map((o) => ({
          status: o.status,
          value: o.status === 'fulfilled' ? o.value : String(o.reason),
        }))
      ));
}
