# react-native-janus-webrtc

Clone / cd into repo / run npm i

I use this janus server localy : https://github.com/atyenoria/janus-webrtc-gateway-docker

I run the app on my iphone with npx react-native start and a build in Xcode.

To install react-native-webrtc I followed this steps : https://github.com/react-native-webrtc/react-native-webrtc/blob/master/Documentation/iOSInstallation.md

Here is a link to Android intallation : https://github.com/react-native-webrtc/react-native-webrtc/blob/master/Documentation/AndroidInstallation.md

This repo is very much inspired by : https://github.com/atyenoria/react-native-webrtc-janus-gateway

My situation so far :

I can initiate the janus instance and initiate the videoroom plugin, even register a user, but can't get no stream, the createOffer method on the plugin never suceed. It doesn't throw an error either so I don't really know what to do next, but doesn't show my log in the success callback either.

Here are the logs from the JS console : 

```
Initializing library
RCTLog.js:47 Running application mobileApp ({
    initialProps =     {
    };
    rootTag = 21;
})
infoLog.js:16 : Running "mobileApp" with {"rootTag":21,"initialProps":{}}
janus.mobile.js:264 : Library initialized: true
janus.mobile.js:290 : Using WebSockets to contact Janus: ws://192.168.1.5:8188/
janus.mobile.js:328 : sample
janus.mobile.js:600 : Created session: 7399766281699688
video.js:59 : success
janus.mobile.js:817 : Created handle: 7739555756310358
janus.mobile.js:1463 : Default video setting (true) is stdres 4:3
janus.mobile.js:1468 : Adding media constraint true
video.js:90 : MESSAGE JOINED {videoroom: "joined", room: 1234, description: "Demo Room", id: 8678793669311222, private_id: 3030433413, …}description: "Demo Room"id: 8678793669311222private_id: 3030433413publishers: []room: 1234videoroom: "joined"__proto__: Object
```
