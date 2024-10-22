# Overview

The logger we are using is Pino and is basically a wrapper with specific configurations set over the Pino logger. We
simply detect when the application is in production mode and prevents logging in the browser.

## What is Pino?

`Pino` is a Node.js logger that uses minimum resources for logging.

### Why we've chosen Pino

Using minimum resources for logging is very important. Log messages tend to get added over time and this can lead to a
throttling effect on applications – such as reduced requests per second. Pino claims to be over `5x` faster than
alternatives.

See the [Benchmarks](https://getpino.io/#/docs/benchmarks) for comparisons.

There are many logging libraries out there such as `Winston` and `Bunyan`. However, we chose `Pino` over them as it is 
very **low overhead**, and is has the ability to log on the browser, which is something Winston cannot do. We require
our JavaScript code to be isomorphic as we use Svelte Kit (the same code is expected to run on both the browser and the
server/Node.js)