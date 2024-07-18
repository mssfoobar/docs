
# Pre-requisites



Firewall requirement:


<table>
  <thead>
    <tr>
      <th>Name </th>
      <th>inbound/outbound </th>
      <th>Port</th>
      <th>type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >APPS/Web</td>
      <td> (outbound)</td>
      <td>443</td>
      <td>TCP</td>
    </tr>
    <tr>
      <td >APPS/Web/cloudwatch</td>
      <td> (outbound)</td>
      <td>443</td>
      <td>TCP</td>
    </tr>
    <tr>
      <td >APPS</td>
      <td> (outbound)</td>
      <td>3478</td>
      <td>UDP</td>
    </tr>
    <tr>
      <td >APPS</td>
      <td> (outbound)</td>
      <td>5000</td>
      <td>UDP</td>
    </tr>
    <tr>
      <td >APPS</td>
      <td> (outbound)</td>
      <td>3478</td>
      <td>TCP</td>
    </tr>
    <tr>
      <td >Stun server	</td>
      <td> (inbound)</td>
      <td>3478</td>
      <td>UDP</td>
    </tr>
    <tr>
      <td >SFU TCP	</td>
      <td> (inbound)</td>
      <td>3478</td>
      <td>TCP</td>
    </tr>
    <tr>
      <td >SFU UDP		</td>
      <td> (inbound)</td>
      <td>5000</td>
      <td>UDP</td>
    </tr>
    <tr>
      <td >Database		</td>
      <td> (outbound)</td>
      <td>5432</td>
      <td>TCP</td>
    </tr>
  </tbody>
</table>

Websocket requirement
```
- wss://ucs-signal.<yourdomain>/room.RoomSignal/Signal
- wss://hasuracookie.<yourdomain>/v1/graphql
``` 

## Software for installation client:
- Aws CLI
- Terraform
- Kubectl
- Helm
- Git

Install the software listed above on the client you are using to spawn the AOH cluster

## Configuration
AWS account and profile

To set profile:


For windows:
```
setx AWS_PROFILE <clustername>
aws eks update-kubeconfig --region ap-southeast-1  --name <clustername>
```


For linux:
```
export AWS_PROFILE=<clustername>
aws eks update-kubeconfig --region ap-southeast-1  --name <clustername>
```

Log into your aws account.
Check that your ".aws" folder is populated with the correct credential.

## Checkout the following repositories
https://github.com/mssfoobar/ar2-infra

https://github.com/mssfoobar/aoh-web-infra

https://github.com/mssfoobar/ar2-ucs-infra

## Prepare new set of files for deployment
clone the files by running the script "ar2-infra/new_cluster.sh"

## obtain the latest DB package from here
https://github.com/mssfoobar/aoh-db

## top level domain
Prepare a top level domain to be used by AOH. 
The AOH applications requires an endpoint to be reachable from the internet to function. 
For example: 
*.wfm-alpha.agilrad.com



