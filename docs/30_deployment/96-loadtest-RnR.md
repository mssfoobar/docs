---
sidebar_position: 96
---

# RnR Session loading Loadtesting 

### Objective: To test the loading of RnR session with respect to the snapshot interval

### Main Parameter to measurea
- Loading time 

## #Results


<table>
  <thead>
    <tr>
      <th>Interval </th>
      <th>Session length </th>
      <th>Static</th>
      <th>Dynamic</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >5 minutes</td>
      <td> 2hr</td>
      <td>26 second</td>
      <td> 20 seconds</td>
    </tr>
    <tr>
      <td >60 minutes</td>
      <td>  2hr</td>
      <td>1 minutes 8 seconds</td>
      <td>1 minutes 56 seconds</td>
    </tr>
	<tr>
      <td >120 minutes</td>
      <td>  2hr</td>
      <td>1 minutes 36 seconds</td>
      <td>1 minutes 52 seconds</td>
    </tr>
    <tr>
      <td >240 minutes</td>
      <td>  2hr</td>
      <td>5 minutes 5 seconds</td>
      <td>5 minutes 7 seconds</td>
    </tr>
    <tr>
      <td >24hrs</td>
      <td>  2hr</td>
      <td>1 hr 34 minutes 49 seconds</td>
      <td>1 hr 59 minutes 12 seconds</td>
    </tr>

  </tbody>
</table>




### 1 Testing setup


### AOH Cluster setup used for the test

- Environment:                        	qa
- Cloud provider:                     	AWS
- Number of Cores in the AOH cluster: 	6
- Number of nodes for cluster:        	3
- Size of RAM per cluster:            	24GB
- Size of RAM pre node:               	8GB
- Storage class:                     	gp2
- CPU limit per pod			200M
- RAM limit per pod			128MB

## These are the test setup


![Message Bus](./images/RnR_loadingchart.png)


### 2 Testing Preparation
1) The snapshot interval is changed to the required timing based on the test plan
2)  For some interval, trips are added by a cyclic script which hammers the system at a rate of 29 seconds per trip.



---
3 Test steps
---
<!-- Chapter content here -->

### 
1) A timing close to the time interval is chosen
2) After activating the dev-mode, start to record the network traffic
3) load the session.


---
3 Findings
---
Replay web is behaving like the normal web in terms of maximum user login per seconds.



Average request per log in  = 156req

max request per seconds = 636

max supported user per seconds login = 4 (dev2)

Max user supported for replay is therefore = 4
