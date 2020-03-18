# API

I have implemented the following five HTTP endpoints described below.

| HTTP Verb | Path                     | Request Content-Type | Request body | Response Content-Type | Example response body                                                                                               |
| --------- | ------------------------ | -------------------- | ------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| GET       | `/v1/gifs/search/{term}` | `application/json`   | -            | `application/json`    | `{"data": {"gif": { "title": "Banana","url": "https://giphy.com/gifs/despicable-me-minions-gif-1uPiL9Amv5zkk"} } }` |

I have included a [swagger.yaml](./swagger.yml) file that describes this same API.
