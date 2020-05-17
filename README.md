# react-native-janus-webrtc

Clone / cd into repo / run npm i

I use this janus server localy : https://github.com/atyenoria/janus-webrtc-gateway-docker

I run the app on my iphone with npx react-native start and a build in Xcode.

To install react-native-webrtc I followed this steps : https://github.com/react-native-webrtc/react-native-webrtc/blob/master/Documentation/iOSInstallation.md

Here is a link to Android intallation : https://github.com/react-native-webrtc/react-native-webrtc/blob/master/Documentation/AndroidInstallation.md

I can initiate the janus instance and initiate the videoroom plugin, even register a user, but can't get no stream, the createOffer method on the plugin never suceed. It doesn't throw an error either so I don't really know what to do next.

Here are the logs : 
```
[Sun May 17 2020 15:24:48.419]  LOG      Initializing library
[Sun May 17 2020 15:24:48.421]  LOG      Running "mobileApp" with {"rootTag":1,"initialProps":{}}
[Sun May 17 2020 15:24:48.421]  LOG      Library initialized: true
[Sun May 17 2020 15:24:48.422]  LOG      Using WebSockets to contact Janus: ws://192.168.1.5:8188/
[Sun May 17 2020 15:24:48.423]  LOG      sample
[Sun May 17 2020 15:24:48.435]  DEBUG    Got event on session null
[Sun May 17 2020 15:24:48.440]  DEBUG    {"data": {"id": 7299408014996665}, "janus": "success", "transaction": "8K777624lAKT"}
[Sun May 17 2020 15:24:48.441]  DEBUG    {"data": {"id": 7299408014996665}, "janus": "success", "transaction": "8K777624lAKT"}
[Sun May 17 2020 15:24:48.442]  LOG      Created session: 7299408014996665
[Sun May 17 2020 15:24:48.443]  LOG      success
[Sun May 17 2020 15:24:48.447]  DEBUG    Got event on session 7299408014996665
[Sun May 17 2020 15:24:48.449]  DEBUG    {"data": {"id": 842039920743523}, "janus": "success", "session_id": 7299408014996665, "transaction": "9orvTomR8vT3"}
[Sun May 17 2020 15:24:48.449]  DEBUG    {"data": {"id": 842039920743523}, "janus": "success", "session_id": 7299408014996665, "transaction": "9orvTomR8vT3"}
[Sun May 17 2020 15:24:48.450]  LOG      Created handle: 842039920743523
[Sun May 17 2020 15:24:48.451]  DEBUG    Sending message to plugin (handle=842039920743523):
[Sun May 17 2020 15:24:48.451]  DEBUG    {"body": {"display": "Adrien Floor", "ptype": "publisher", "request": "join", "room": 1234}, "janus": "message", "transaction": "EbkHEDSnecaK"}
[Sun May 17 2020 15:24:48.452]  DEBUG    isTrickleEnabled: undefined
[Sun May 17 2020 15:24:48.453]  DEBUG    isAudioSendEnabled: {"audio": true, "video": true}
[Sun May 17 2020 15:24:48.454]  DEBUG    isAudioSendEnabled: {"audio": true, "video": true}
[Sun May 17 2020 15:24:48.455]  DEBUG    isVideoSendEnabled: {"audio": true, "video": true}
[Sun May 17 2020 15:24:48.456]  LOG      Default video setting (true) is stdres 4:3
[Sun May 17 2020 15:24:48.457]  LOG      Adding media constraint true
[Sun May 17 2020 15:24:48.457]  DEBUG    {"mandatory": {"maxHeight": 480, "maxWidth": 640, "minHeight": 480, "minWidth": 640}, "optional": []}
[Sun May 17 2020 15:24:48.458]  DEBUG    Got event on session 7299408014996665
[Sun May 17 2020 15:24:48.459]  DEBUG    {"janus": "event", "plugindata": {"data": {"description": "Demo Room", "id": 3870076121481220, "private_id": 36101182, "publishers": [Array], "room": 1234, "videoroom": "joined"}, "plugin": "janus.plugin.videoroom"}, "sender": 842039920743523, "session_id": 7299408014996665, "transaction": "EbkHEDSnecaK"}
[Sun May 17 2020 15:24:48.460]  DEBUG      -- Event is coming from 842039920743523 (janus.plugin.videoroom)
[Sun May 17 2020 15:24:48.461]  DEBUG    {"description": "Demo Room", "id": 3870076121481220, "private_id": 36101182, "publishers": [], "room": 1234, "videoroom": "joined"}
[Sun May 17 2020 15:24:48.462]  DEBUG    Notifying application...
[Sun May 17 2020 15:24:48.462]  LOG      MESSAGE JOINED {"description": "Demo Room", "id": 3870076121481220, "private_id": 36101182, "publishers": [], "room": 1234, "videoroom": "joined"}
[Sun May 17 2020 15:24:48.463]  DEBUG    isTrickleEnabled: undefined
[Sun May 17 2020 15:24:48.464]  DEBUG    isAudioSendEnabled: {"audioRecv": false, "audioSend": true, "videoRecv": false, "videoSend": true}
[Sun May 17 2020 15:24:48.465]  DEBUG    isAudioSendEnabled: {"audioRecv": false, "audioSend": true, "videoRecv": false, "videoSend": true}
[Sun May 17 2020 15:24:48.465]  DEBUG    isVideoSendEnabled: {"audioRecv": false, "audioSend": true, "videoRecv": false, "videoSend": true}
[Sun May 17 2020 15:24:48.466]  DEBUG    Got event on session 7299408014996665
[Sun May 17 2020 15:24:48.467]  DEBUG    {"janus": "ack", "session_id": 7299408014996665, "transaction": "EbkHEDSnecaK"}
[Sun May 17 2020 15:24:48.467]  DEBUG    Message sent!
[Sun May 17 2020 15:24:48.468]  DEBUG    {"janus": "ack", "session_id": 7299408014996665, "transaction": "EbkHEDSnecaK"}
```
