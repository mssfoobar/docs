---
sidebar_position: 3
sidebar_label: Testing
---

# 🔧 Testing

## SFU load testing tool

Clone the vidconf-loadtest repository

```bash
git clone https://github.com/mssfoobar/vidconf-loadtest.git
```

### Test File

Publishing of files in the following formats are supported.

| Container | Video Codecs | Audio |
| --------- | ------------ | ----- |
| WEBM      | VP8          | OPUS  |

If your data is not webm, you can use ffmpeg to make one
This show how to make a 0.5Mbps webm:

```
ffmpeg -i djrm480p.mp4 -strict -2 -b:v 0.4M -vcodec libvpx -acodec opus djrm480p.webm
```

See the ffmpeg docs on [VP8](https://trac.ffmpeg.org/wiki/Encode/VP8) for encoding options

### Quick Start

Change necessary Makefile variables

```
# number of client publishing the video stream
pubClient = 1
# number of client subscribing the video stream
subClient = 10
# signal address
signalAddr = 127.0.0.1:5551
# session id
sessionId = ion
# duration the load testing tool will run
duration = 600
```

Use makefile commands to start the tool in docker

```Command Line
make build
make start
```

### Run tool in another Linux server

```
# build a linux version, we test on linux because mac fd limit
env GOOS=linux go build -o sfu-loadtest ./sfu-loadtest/main.go
```

```
# pub.sh
#./sfu-loadtest -file ./djrm480p.webm -clients 1 -role pubsub -gaddr "yoursfuip:5551" -session 'ion' -log debug -cycle 1000 -a -v

# sub.sh
#../sfu-loadtest -file /Volumes/vm/media/djrm480p.webm  -clients 10 -role sub -gaddr "127.0.0.1:5551" -session 'ion'
```
