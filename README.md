# Kommt die Bahn?

Monitor the arrivals and departures of railway connections.

## Debugging

To debug this Vue.js application, simply follow [Debugging in VS Code](https://vuejs.org/v2/cookbook/debugging-in-vscode.html). However, replace the `npm start` command with `npm run serve`.

## CI Pipeline

We have selected the GitHub application [Google Cloud Build](https://github.com/apps/google-cloud-build) for running our Continuous Integration pipelines in Google's [Cloud Build](https://github.com/apps/google-cloud-build) environment.

The containers built by GCP will be pushed to nearline storage (Europe) in order to save costs. Nearline storage is 0.01 EUR/month/GB whereas multiregional storage is 0.026 USD/month/GB.