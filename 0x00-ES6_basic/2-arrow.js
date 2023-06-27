/**
 * Represents a list of San Francisco neighborhoods.
 */
export default class NeighborhoodsList {
  /**
     * Initializes the NeighborhoodsList with default neighborhoods.
     */
  constructor() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  }

  /**
     * Adds a new neighborhood to the San Francisco neighborhoods list.
     * @param {string} newNeighborhood - The new neighborhood to add.
     * @return {string[]} The updated San Francisco neighborhoods list.
     */
  addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
