# seca-sample
Sample Angular application for SECA

## Start the API (`http://localhost:4000/api`)

`$ docker-compose up api`

## Start the UI

`$ cd ui && npm start`

UI starts with a proxy to `http://localhost:4000/api`. To start without the proxy:

`$ cd ui && ng serve`
