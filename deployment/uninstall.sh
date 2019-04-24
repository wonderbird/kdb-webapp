#!/usr/bin/env bash
# Delete all pods and services, including uninitialized ones, in the given namespace
kubectl -f ./kommt-die-bahn.yaml -n kommt-die-bahn delete --all
