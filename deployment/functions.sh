# initialize gcloud
function init_gcloud() {
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
}

# Issue a warning about load balancers to be deleted manually
function load_balancer_warning() {
   echo
   echo ATTENTION
   echo =========
   echo This project has created an external load balancer.
   echo Please go to the GCloud Console and delete the created load balancer manually.
   echo
   echo https://console.cloud.google.com/net-services/loadbalancing/loadBalancers/list?project=${PROJECT}
   echo
}