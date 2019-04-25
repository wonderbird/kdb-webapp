#!/usr/bin/env bash
# Delete all pods and services, including uninitialized ones, in the given namespace
. ./functions.sh

init_gcloud

kubectl -f ./kommt-die-bahn.yaml -n kommt-die-bahn delete --all

load_balancer_warning
