#!/usr/bin/env bash

. ./functions.sh

init_gcloud

${GCLOUD_CMD} container clusters get-credentials ${PROJECT}-${REGION} --zone=${ZONE}

kubectl apply -f ${DIR}/namespace.yaml
sed -e "s/REPLACE_ME_PROJECT/${PROJECT}/g" ${DIR}/kommt-die-bahn.yaml | ${KUBECTL_CMD} apply -f -
${KUBECTL_CMD} delete pods -l app=kommt-die-bahn --now
