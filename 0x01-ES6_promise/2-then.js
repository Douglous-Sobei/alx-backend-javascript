/**
 * Handles the response from the API promise.
 * @param {Promise} promise - The promise from the API.
 * @return {Promise} A promise that resolves to an object with the status and body properties.
 */
function handleResponseFromAPI(promise) {
  return promise
      .then(() => ({
        status: 200,
        body: 'success',
      }))
      .catch(() => Error())
      .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
