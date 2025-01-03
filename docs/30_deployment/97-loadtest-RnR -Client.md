---
sidebar_position: 97
---

# RnR Web Client loading Loadtesting 

### Objective: To test the Number of Users supported  with respect to the sizing of the Replay-web pods

### Main Parameter to measurea
- Users

---
Findings
---
Increasing the number of pods and/or CPU increased the number of users supported

## #Results


<table>
  <thead>
    <tr>
      <th>pod number </th>
      <th>CPU size </th>
      <th>Ram size</th>
      <th>Users supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td> 200m</td>
      <td>128MB</td>
      <td> 3</td>
    </tr>
    <tr>
      <td>2</td>
      <td>  200m</td>
      <td>128MB</td>
      <td>4</td>
    </tr>
	<tr>
      <td>3</td>
      <td>  200m</td>
      <td>128MB</td>
      <td>6</td>
    </tr>
    <tr>
      <td>4</td>
      <td>200m</td>
      <td>128MB</td>
      <td>7</td>
    </tr>
    <tr>
      <td >1 </td>
      <td>200m</td>
      <td>2056MB</td>
      <td>3</td>
    </tr>
    <tr>
      <td >1 </td>
      <td>400m</td>
      <td>2056MB</td>
      <td>7</td>
    </tr>
    <tr>
      <td >1 </td>
      <td>600m</td>
      <td>2056MB</td>
      <td>8</td>
    </tr>
    <tr>
      <td >1 </td>
      <td>800m</td>
      <td>2056MB</td>
      <td>9</td>
    </tr>
    <tr>
      <td >1 </td>
      <td>1000m</td>
      <td>2056MB</td>
      <td>10</td>
    </tr>

  </tbody>
</table>

From the table above, you can see that the increase in pods and increase in CPU directly cause an increase in the number of users supported. 



### 1 Testing setup


### AOH Cluster setup used for the test

- Environment:                        	dev2
- Cloud provider:                     	Proxmox
- Number of Cores in the AOH cluster: 	24
- Number of nodes for cluster:        	6
- Size of RAM per cluster:            	1536GB
- Size of RAM pre node:               	256GB
- Storage class:                     	HDD, Max 500MBps, Max IOPS  288


## These are the test setup



### 2 Testing Preparation
1) RnR is running



---
3 Test steps
---
<!-- Chapter content here -->

### 
1) A number of browsers is opened at the "Replay-web.xxx.xxxx" domain
2) The number of users supported before the clients experienced errors is recorded




Average request per log in  = 156req

max request per seconds = 636

max supported user per seconds login = 4 (dev2)

Max user supported for replay is therefore = 4
---
4 Appendix 
---

## Extra test done on QA
<table>
  <thead>
    <tr>
      <th>pod number </th>
      <th>CPU size </th>
      <th>Ram size</th>
      <th>Users supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td> 800m</td>
      <td>2056MB</td>
      <td> 14</td>
    </tr>

  </tbody>
</table>

This is a control test done on the qa environment. Refer to https://mssfoobar.github.io/docs/docs/deployment/loadtest for the general setup of the qa environment at that time of testing.
