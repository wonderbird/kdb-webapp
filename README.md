# Kommt die Bahn?

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

## CI Pipeline

We have selected the GitHub application [Google Cloud Build](https://github.com/apps/google-cloud-build) for running our Continuous Integration pipelines in Google's [Cloud Build](https://github.com/apps/google-cloud-build) environment. The build is configured in [cloudbuild.yaml](./blob/master/cloudbuild.yaml).

You can [send a build manually](https://cloud.google.com/cloud-build/docs/running-builds/start-build-manually) from your command line:

```bash
gcloud builds submit --config cloudbuild.yaml .
```

The resulting image will be pushed to your [Google Container Registry](https://console.cloud.google.com/projectselector2/gcr?organizationId=0&supportedpurview=project)

## Deployment to Production

### Prerequisites

- You need a Google Compute Engine enabled [Google](https://www.google.com) account
- For your account, a [Project](https://console.cloud.google.com/projectcreate) is required, which has the [Google Kubernetes Engine](https://console.cloud.google.com/projectselector2/kubernetes/list?folder=true&organizationId=0&supportedpurview=project) enabled
- Install and initialize the [Google Cloud SDK (gcloud)](https://cloud.google.com/sdk/docs/#install_the_latest_cloud_tools_version_cloudsdk_current_version).

### Deployment

1. If not already running, create a Kubernetes cluster by invoking `deployment/cluster-create.sh`

2. Install a pod running the latest docker image of kommt-die-bahn by calling `deployment/install.sh -p <project-id> -r <region> -z <zone>`. You can change the defaults to your needs in `deployment/functions.sh:init_gcloud()`.

3. Get the IP adress of the kommt-die-bahn application either from the [Google Kubernetes Engine / Services Pane](https://console.cloud.google.com/projectselector2/kubernetes/discovery?organizationId=0&supportedpurview=project) or by calling `kubectl --namespace kommt-die-bahn get services kommt-die-bahn-service`.

### Cleanup

In order to save costs you can completely shutdown the running containers and the Kubernetes cluster:

1. Shutdown the kommt-die-bahn containers: `deplyoment/uninstall.sh`

2. Shutdown the Kubernetes cluster: `deployment/cluster-delete.sh`

3. Wait some 3 minutes, then delete remaining external load balancers using the [Google Network Services / Load Balancing Panel](https://console.cloud.google.com/projectselector2/net-services/loadbalancing/loadBalancers/list?organizationId=0&supportedpurview=project)
