#!/usr/bin/env bash
# Delete all pods and services, including uninitialized ones, in the given namespace
kubectl -n kommt-die-bahn delete pods,services --all
