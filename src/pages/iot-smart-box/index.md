---
title: IoT - Smart modular box for package retrieval
date: "2018-06-30"
featuredImage: './Iot.png'
---

<!-- end -->
### Proof of concept.
The product is a modular box with a colling system that will be placed in the Companies building or shopping mall. The shopping mall will get access to web dashboard and API, so they can controll the box to do actions like:

- open the box
- close the box
- check the temperature
- check if the box is available

### How the system will work
1) We will use esp32 to controll the box.
2) We will use google iot core to create keys to establish secure communication between the cloud and esp32.
3) We will use google cloud functions for triggering the device config updates. We will only do 1 type of update to the devie. We will ask device to open the lock or close the lock.
4) The device will send data to firestore database about the temperature in the box. This will be a interval of 600sec.

### Technology used:
- React native
- Google IoT core
- Google Cloud functions
- Firebase database
- mongooseOS for programming esp32 microcontroller

Project repository: https://github.com/RyszardRzepa/keypark-backend
