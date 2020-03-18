const fetch = require("node-fetch");

/**
 * @typedef {Object} Client
 *
 * API client
 */
module.exports = class Client {
  #apiUrl = `http://localhost:3000/v1/gifs/search`;

  /**
   * Searches by term.
   * @async
   * @param {String} term The search term
   * @returns {Promise.<Object>} Response object
   */
  static async search(term) {
    try {
      return await fetch(`${this.#apiUrl}/${term}`, { method: "get" });
    } catch (err) {
      console.error("failed with the below error!");
      console.log("*****************************");
      console.error(err);
    }
  }
};
