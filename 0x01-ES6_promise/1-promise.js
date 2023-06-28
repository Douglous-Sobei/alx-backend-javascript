/**
 * Returns a promise that resolves or rejects based on the given boolean parameter.
 * @param {boolean} success - Indicates whether the response should be resolved or rejected.
 * @return {Promise} A promise that resolves or rejects based on the success parameter.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
