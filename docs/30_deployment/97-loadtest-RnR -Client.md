---
sidebar_position: 97
---

# RnR Web Client loading Loadtesting 

### Objective: To test the Number of Users supported  with respect to the sizing of the Replay-web pods

### Main Parameter to measurea
- Users

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

  </tbody>
</table>




### 1 Testing setup


### AOH Cluster setup used for the test

- Environment:                        	qa
- Cloud provider:                     	AWS
- Number of Cores in the AOH cluster: 	24
- Number of nodes for cluster:        	6
- Size of RAM per cluster:            	1536GB
- Size of RAM pre node:               	256GB
- Storage class:                     	HDD


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


---
3 Findings
---
Increasing the number of pods increased the number of users supported



Average request per log in  = 156req

max request per seconds = 636

max supported user per seconds login = 4 (dev2)

Max user supported for replay is therefore = 4
