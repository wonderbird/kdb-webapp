#!/usr/bin/env bash

. ./functions.sh

init_gcloud

${GCLOUD_CMD} container clusters create ${PROJECT}-${REGION} --disk-size=10G --disk-type=pd-standard --enable-autorepair --enable-autoupgrade --no-enable-cloud-logging --no-enable-cloud-monitoring --machine-type=g1-small --num-nodes=1 --zone=${ZONE}
