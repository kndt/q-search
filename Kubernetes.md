### Kubernetes Setup

Requirement:

- Minikube

Run the following sequentially to get everything running\
 `minikube start`\
 `eval $(minikube docker-env)`\
 `docker build -t search/service .`\
 `kubectl create -f service.yaml`\
 `kubectl create -f deployment.yaml`

Then run `minikube service search-service --url` to get the service url which is needed to make calls to the api service.

### HTTP-API

All endpoints are after `/v1/gifs` resources, for example (`http://192.168.99.104:32445/v1/gifs/ping`) is the `ping` endpoint.\
The rest api endpoints are described in [API.md](./API.md)
