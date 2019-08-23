# Kommt die Bahn?

[![Travis Build Status](https://travis-ci.org/wonderbird/kdb-webapp.svg?branch=master)](https://travis-ci.org/wonderbird/kdb-webapp)
[![Cloud Build Status](https://storage.googleapis.com/stefans-projects-infrastructure/build/status-kdb-webapp.svg)](https://console.cloud.google.com/cloud-build/builds?project=stefans-projects)

Monitor the arrivals and departures of railway connections.

## Running Locally

To run this application on your local computer

```bash
npm install
npm run serve
```

Then open the URL showed by `npm run serve`.

## Debugging

To debug this Vue.js application, simply follow [Debugging in VS Code](https://vuejs.org/v2/cookbook/debugging-in-vscode.html). Replace `npm start` with `npm run serve`.

## CI Pipelines

### Travis CI

On [Travis-CI.org](https://travis-ci.org/) we have configured a build job, which runs the unit tests and eslint every time a branch is pushed to GitHub. The build status badge on the top of this page shows the latest build result.

### Google Cloud Build

We have selected the GitHub application [Google Cloud Build](https://github.com/apps/google-cloud-build) for running our Continuous Integration pipelines in Google's [Cloud Build](https://github.com/apps/google-cloud-build) environment. The build is configured in [cloudbuild.yaml](./blob/master/cloudbuild.yaml).

You can [send a build manually](https://cloud.google.com/cloud-build/docs/running-builds/start-build-manually) from your command line:

```bash
gcloud builds submit --config cloudbuild.yaml .
```

The resulting image will be pushed to your [Google Container Registry](https://console.cloud.google.com/projectselector2/gcr?organizationId=0&supportedpurview=project). You can run that image as follows:

```bash
docker run --name kdb-webapp -it --rm -p 8080:80 eu.gcr.io/stefans-projects/kommt-die-bahn
```

The status of the Cloud Build is reflected by the "cloud build" badge on the top of this README. For instructions on how to create this badge, refer to <a href="#bib-1">[1]</a> and <a href="#bib-2">[2]</a>.

## Building and Running the Docker Image Locally

Usually this application is deployed as a docker container. You can reproduce result of the [Google Cloud Build](https://github.com/apps/google-cloud-build) job on your local machine and run the container using the following commands:

```bash
docker build -t kdb-webapp .
...
docker run --name kdb-webapp -it --rm -p 8080:80 kdb-webapp
```

Then you can open the application on http://localhost:8080 .

## References

<span id="bib-1" name="bib-1">[1] Lj Miranda: [Add badges to your Google Cloud Builds](https://ljvmiranda921.github.io/notebook/2018/12/21/cloud-build-badge/), last visited on Aug. 20, 2019.</span><br>
<span id="bib-2" name="bib-2">[2] Samuel B. Sendelbach: [cloud-build-badge project on GitHub](https://github.com/sbsends/cloud-build-badge), last visited on Aug. 20, 2019.<span><br>
