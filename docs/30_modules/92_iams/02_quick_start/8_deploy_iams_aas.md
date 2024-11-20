---
sidebar_position: 9
---

# Deploy IAMS-AAS
1.	Navigate to the “iams-aas” directory.

2.	Create Service
```bash
kubectl apply -f 01-service.yaml
```
This manifests file creates a `ClusterIP` services for accessing `IAMS-AAS` pod.

3.	Create the Deployment
```bash
kubectl apply -f 02-deployment.yaml
```
This manifests file will instruct Kubernetes to deploy a Pod using `iams-aas` image from AGIL Ops Hub container registry.
	
4.	Edit `03-ingress.yaml` and change the value of the `Host` field to the actual FQDN of your Kubernetes Cluster.

The example value in the `03-ingress.yaml` is using `nip.io` to create a FQDN to point to the Kubernetes Cluster.
To use `nip.io`, simply replace `10.10.10.100` in the example value with the Ipv4 address of your Kubernetes Cluster.

5.	Create ingress
```bash
kubectl apply -f 03-ingress.yaml
```
