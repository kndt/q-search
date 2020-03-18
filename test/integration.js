const { assert, should } = require("chai");
const fetch = require("node-fetch");

should();

const apiUrl = `http://localhost:3000/v1/gifs`;
const responseBodyKeys = ["data", "gif", "title", "url"];

describe("Search API", () => {
  it("should get a gif url by term", async () => {
    const term = "banana";
    try {
      const response = await fetch(`${apiUrl}/${term}`, { method: "get" });
      const json = await response.json();
      assert.isObject(json);
      assert.hasAllDeepKeys(json, responseBodyKeys);
    } catch (error) {
      console.error("test failed with the below error!");
      console.log("*****************************");
      console.error(response.status);
      console.error(error);
    }
  });
});
