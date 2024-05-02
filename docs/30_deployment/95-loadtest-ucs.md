---
sidebar_position: 95
---

# UCS/SFU Loadtesting 
Objective: 

### AOH Cluster setup used for the test
Environment:                        wfm-qa
Cloud provider:                     AWS
Number of Cores in the AOH cluster: 8
Number of nodes for cluster:        4
Number of cores for SFU:            2
Size of RAM:                        32GB
Storage class:                      gp3

## These are the test setup

### EC2 instances testing machine
Number of Cores: 4
Class of EC2: t3a.xlarge
RAM size: 16GB
EBS class : gp2

### SFU configuration
maxbandwidth = 1500kbps
maxpackettrack = 500

![Message Bus](./images/TestSetup.png)



### loadtest targets
Minimum Number of 1-1 video calls: 100
Minimum Number of streams: 200
Minimum Number of Users: 200

#### Additional Tools used:
 OBS (For Webcam simulation)


Websites used for webcam simulation
- https://www.clocktab.com/
- https://www.timeanddate.com/worldclock/
- https://www.changiairport.com/
- https://www.youtube.com/watch?v=LDU_Txk06tM

#### actual communication model
![Message Bus](./images/MessageBus.png)

All clients will send their video stream to the SFU, and will receive streams from other uses through the SFU



####

### Test steps
1) EC2 of type t3a.xlarge is spawned
2) Firefox, OBS, webcam simulator stream is installed
3) Webcam simulator is started, OBS is started
3) 1st User insteance is started up and logged in for Firefox, 1-1 video call is engaged with 2nd User
4) 2nd User instance is started up and logged in in Firefox private mode. 1-1 vidoe call is engaged with 4th User
5) Another EC2 is spawned.
6) Firefox, OBS, webcam simulator stream is installed as well
7) 3rd User insteance is started up and logged in for Firefox, 1-1 video call is engaged with 1st User
8) 4th User instance is started up and logged in in Firefox private mode. 1-1 vidoe call is engaged with 2nd User
9) The process is repeated




### results

![Message Bus](./images/Network_out_1835hrs_2Streams.png)
Figure 1a graph of EC2 with one or two streams output running

![Message Bus](./images/23thApril_2100hrs_100output.png)
Figure 1b graph of EC2 with 

From figure 1b,around 1835hrs on 23rd April, you can observe that most EC2s will converge to about 1.58MBps when two streams is up, and around 550kBps in Figure 1a when one steam upload is happening.
The total streams translate to 84 streams, with 27 EC2 with 2 streams, and 30 streams with 1 stream.


![Message Bus](./images/Network_out_1835hrs_2Streams.png)
Figure 2a graph of EC2 with one or two streams input running

![Message Bus](./images/Network_out_1835hrs_1Streams.png)
Figure 2b graph of EC2 with at least one streams input running

From figure 2, you can observe that the EC2s are also ingesting.

From Figure 2, around 1730hrs on 23rd April, you can observe that more tha 27 EC2s have bandwidth ingesion running at around 1.1MBps, which indicates that there are two streams running and 30 EC2s running around 200 - 600kBps, which inidicates that it is running at least 1 stream. It also means that there are at least 84 streams being ingested at the same time.

![Message Bus](./images/23thApril_2100hrs_100output.png)
Figure 3 graph of EC2 with one or two streams output running

From Figure 3, you can observe that more tha 28 EC2s have bandwidth ingesion running at around 1.1MBps, which indicates that there are two streams running and 21 EC2s running around 200 - 600kBps, which inidicates that it is running at least 1 stream. It also means that there are at least 87 streams being ingested at the same time.

### observation
1) Most stream are around 500-600kB  
2) streams drop/disconnects  after a while, there seems not to be any notable pattern at this point of time for the disconnections
3) there will be typically 2 drops that will be happening. After the 2nd drop, the EC2 does not seem to be streaming any data until the UCS front end is restarted 
4) It seems that the SFU  converges to CPU 34%
5) after 12 hours, about 50% of the streams would stop. The disconnection slows down dramatically after the 6th hour.

![Message Bus](./images/After12Hours.png)



#### some statistic for the sfu
1) Max UDP byte process per seconds handled by SFU (up/down): 562kbps
2) Max CPU utilisaton for sfu pod/service: 50%
3) Max Memory utilitsation for sfu pod/service: 14%
4) Max Node CPU utilisation: 63.4%
5) Average Node memory utilisation: 51%

## Appendix A OBS as a virtual webcam

Apart from steaming a PC screen to major streaming sites,  OBS can emulate a webcam onto the client using the many source capture tools the OBS offers. For this test, the browser capture tool allows a user to load a webpage directly. 

## Appendix B why Spawn EC2 instance instead of spawing VMs on local servers
The bandwidth of the office to the wfm-qa environment is 99mbps. To prevent any bottle neck, it was decided to do future tests in the EC2 when possible.


![Message Bus](./images/MaxNetworkbandwidthNeededForTest.png)
Sample max network activity of 305 MBps recorded