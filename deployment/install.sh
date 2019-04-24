#!/usr/bin/env bash

PROJECT=${PROJECT:-"stefans-projects"}
REGION=${REGION:-"europe-west1"}
ZONE=${ZONE:-"europe-west1-b"}

#-- take the supplied parameters
while [ "$#" -gt "0" ]; do
	case $1 in
		-p) PROJECT=$2
          shift 2
         ;;
      -r) REGION=$2
          shift 2
         ;;
      -z) ZONE=$2
          shift 2
         ;;
      *)  echo "Unknown parameter"
		 exit 1
		 ;;
	esac
done

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
GCLOUD_CMD="gcloud --project=${PROJECT}"
NAMESPACE="kommt-die-bahn"
KUBECTL_CMD="kubectl --namespace=${NAMESPACE}"

${GCLOUD_CMD} container clusters get-credentials ${PROJECT}-${REGION} --zone=${ZONE}

kubectl apply -f ${DIR}/namespace.yaml

sed -e "s/REPLACE_ME_PROJECT/${PROJECT}/g" ${DIR}/kommt-die-bahn.yaml | ${KUBECTL_CMD} apply -f -

${KUBECTL_CMD} delete pods -l app=kommt-die-bahn --now
