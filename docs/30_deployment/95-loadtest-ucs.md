---
sidebar_position: 95
---

# UCS/SFU Loadtesting results

### These are the test setup
Environment: wfm-qa
Cloud provider: AWS

### Cluster deployment
Number of Cores: 8
Number of nodes: 4
Size of RAM: 32GB
Storage class: gp3

### EC2 instances
Number of Cores: 4
Class of EC2: t3a.xlarge
RAM size: 16GB
EBS class : gp2



### SFU configuration
maxbandwidth = 1500kbps
maxpackettrack = 500

import DocusaurusImageUrl from '@site/static/img/MessageBus.png';

<img src={DocusaurusImageUrl} />;

### loadtest parameters
Minimum Number of 1-1 video calls: 100
Minimum Number of streams: 200
Minimum Number of Users: 200

Additional Tools used: OBS (For Webcam simulation)


### results



1) Maximum bitrate recorded = 63kbps
2) Max UDP byte process per seconds handled by SFU: 346M
3) Max CPU utilisaton for sfu pod/service: 50%
4) Max Memory utilitsation for sfu pod/service: 14%
5) Max Node CPU utilisation: 63.4%
6) Max Node memory utilisation: 51%

