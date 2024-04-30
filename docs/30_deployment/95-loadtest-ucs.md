---
sidebar_position: 95
---

# UCS/SFU Loadtesting 
Objective: 

### AOH Cluster setup used for the test
Environment: wfm-qa
Cloud provider: AWS
Number of Cores: 8
Number of nodes: 4
Size of RAM: 32GB
Storage class: gp3

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



### loadtest parameters
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

### Test procedures
1) EC2 or type t3a.xlarge is spawned
2) Firefox, OBS, webcam simulator stream is installed
3)


### results



1) Maximum bitrate recorded = 63kbps
2) Max UDP byte process per seconds handled by SFU (up/down): 562kbps
3) Max CPU utilisaton for sfu pod/service: 50%
4) Max Memory utilitsation for sfu pod/service: 14%
5) Max Node CPU utilisation: 63.4%
6) Average Node memory utilisation: 51%

### observation
1) one stream can be about 600kB  
2) streams drop off after a while
3) there will be typically 2 drops that will be happening. After the 2nd drop, the EC2 will not be streaming 
4) It seems that the SFU likes to converge to CPU 34%
7) 

## Appendix A OBS as a virtual webcam

Apart from steaming a PC screen to major streaming sites,  OBS can emulate a webcam onto the client using the many source capture tools the OBS offers. For this test, the browser capture tool allows a user to load a webpage directly. 

## Appendix B why Spawn EC2 instance instead of spawing VMs on local servers
The bandwidth of the office to the wfm-qa environment is 99mbps. To prevent any bottle neck, it was decided to do future tests in the EC2 when possible.


![Message Bus](./images/MaxNetworkbandwidthNeededForTest.png)
Sample max network activity of 305 MBps recorded