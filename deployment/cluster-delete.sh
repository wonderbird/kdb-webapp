#!/usr/bin/env bash

. ./functions.sh

init_gcloud

${GCLOUD_CMD} container clusters delete ${PROJECT}-${REGION} --zone=${ZONE}

load_balancer_warning
