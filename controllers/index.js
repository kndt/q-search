const giphy = require("giphy-api")();

const ping = async (_, res) => {
  res.send(`Hi I am the search service.`);
};

const search = async (req, res) => {
  const title = req.params.term;
  try {
    const gifData = await giphy.search(title);
    const url = gifData.data[0].url;
    const response = {
      data: {
        gif: {
          title,
          url
        }
      }
    };
    res.status(200).send(response);
  } catch (err) {
    res.status(204).send({});
  }
};

module.exports = { ping, search };
