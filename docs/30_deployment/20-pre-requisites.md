---
sidebar_position: 20
---

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
      <td >Cloudwatch</td>
      <td> (outbound)</td>
      <td>443</td>
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


## Software for installation client:
- Aws CLI
- Terraform
- Kubectl
- Helm

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

