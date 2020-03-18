# Search API Task

The following are my the reqiurements.

## Techstack

**_NodeJS_**\

- I was in between Golang and NodeJS but opted for NodeJS after Github [npm's](https://github.blog/2020-03-16-npm-is-joining-github) announcement this week.

### Setup

`npm i`\
`node app.js`

### HTTP-API

All endpoints are after `/v1/gifs` resources, for example (`http://localhost:3000/v1/gifs/ping`) is the `ping` endpoint.\
For search `/v1/gifs/search/{term}`\

All implemented rest api endpoints are described in [API.md](./API.md)

### Swagger/OpenAPI API specification

I have included a OpenApi specification file [swagger.yml](./swagger.yml) to describe the api and be able to perform UI endpoint tests or visualize how it should behave.

### Tests

Test are in the `test` folder. I have currently only done integration tests for coverage.

### Other ideas

[Kubernetes](https://kubernetes.io/)
I have added a Kubernetes setup described in [Kubernetes.md](./Kubernetes.md). Which describes a deployment using Kubernetes and other tools, doing all the above setup removing most unnessary deployment pain from the developer and gives a prodution-like environment, devops knowledge is needed, but an option for devops/site-reliablity or iac lovers, the example uses [minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) but I have experimented on [kind](https://github.com/kubernetes-sigs/kind), [rke](https://rancher.com/docs/rke/latest/en/) and [k3s](https://k3s.io/).
