# azure-app-service-keepalive

azure-app-service-keepalive is a small HTTP server that was built to help with non-web-based Node projects run in an Azure App Service without being terminated for not responding to Azure's health monitor.

It has zero dependancies and full test coverage.

## How to Use

I designed it to be an easy one-liner you can add at the beginning of your main entry point. Simply add the following line to start it;

```js
require('azure-app-service-keepalive').keepalive();
```

The above code will listen on port 8080, which is the default port Azure monitors internally. You can also specify a port manually;

```js
// Will bind to tcp port 12345
require('azure-app-service-keepalive').keepalive(12345);
```

The application will also take advantage of the App Service Application Setting `WEBSITES_PORT` which is used as an environment variable when the container is started and informs Azure which port the it should monitor. This happens automatically, no port or setting is required.

## Contribute

If you are interested in contributing, simply fork the project, make your suggested changes, and submit a PR into this repository.

If you want to get in touch with me, the best way is on my Discord at [https://discord.gg/AptKHUS](https://discord.gg/AptKHUS).
