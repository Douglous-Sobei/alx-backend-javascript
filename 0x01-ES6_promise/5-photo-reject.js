/**
 * Uploads a photo with the provided filename.
 * @param {string} filename - The name of the photo file.
 * @returns {Promise} A promise that rejects with an error indicating that the photo cannot be processed.
 */
export default function uploadPhoto(filename) {
    return Promise.reject(
      new Error(`${filename} cannot be processed`),
    );
  }
  