---
sidebar_position: 1
---

# Overview

UCS is a real-time communication system developed for AOH projects.

UCS repositories can be found here.

-   https://github.com/mssfoobar/Vidconf-ion.git
-   https://github.com/mssfoobar/VidConf-ion-app-web.git

## Supported Features:

-   Containerised deployment with DevOps consideration in place
-   Web-based frontend for ease of deployment
-   Video conference to share video, audio, chat messages and files primarily for team-sized collaborations in the course of fulfilling daily tasks
-   HTTPS-API for service provisioning, e.g. advance-room-booking
-   Recording and Playback of conference sessions to record-and-playback the data streams instead of screen capturing of conference sessions
-   Data-encryption for all network traffic
-   Web-security to disable unencrpyted data through well-known ports
-   Scalable backend architecture
-   High-availability architecture
-   Max participant around 200 pax
-   Screen-sharing for meetings
-   System-monitoring for health status
-   Partial-disabling of video, audio or chat
-   ISO8601 zulu time
-   RoomId is google UUID
-   Query params for HTTP POST is inside JSON body
-   Kick user by userId
-   Query Room by roomId
-   Bookroom: optional prompt RelativeFrom:Start/End(Default End) RelativeTimeInSeconds:123 Message:PromptMessage
-   Edit room booking
-   Cancel room booking

## Forked Projects:

UCS is forked from the following open-source projects:-

-   [ION](https://github.com/ionorg/ion) - a complete WebRTC-compatible backend suite written in golang
-   [ION-app-web](https://github.com/ionorg/ion-app-web) - a WebRTC-compatible web-frontend written in golang
