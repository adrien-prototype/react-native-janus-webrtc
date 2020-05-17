import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ListView,
  ScrollView,
  Dimensions,
  Image,
  Alert
} from 'react-native'

import PropTypes from 'prop-types'

import { RTCView } from 'react-native-webrtc'

import Janus from './janus.mobile.js'

let janus
let sfu = null
let started = false
let myUsername = 'Adrien Floor'
let roomId = 1234

const wsServer = 'ws://192.168.1.5:8188/'
Janus.init({
  debug: "all",
  callback: function() {
    if(started) {
      return
    }
    started = true
  }
})

class Video extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      info: 'Initializing',
      status: 'init',
      roomID: '',
      selfViewSrc: null,
      selfViewSrcKey: null
    }
  }

  componentDidMount(){
    this.janusStart()
  }

  janusStart() {
    janus = new Janus({
      server: wsServer,
      success: () => {
        console.log('success')
          janus.attach({
            plugin: "janus.plugin.videoroom",
            success: (pluginHandle) => {
              sfu = pluginHandle
              let register = { "request": "join", "room": roomId, "ptype": "publisher", "display": myUsername }
              sfu.send({"message": register})
              sfu.createOffer({
                media: { audio: true, video: true},
                success: (jsep) => {
                  console.log('$$$$$$$$$ JSEP', jsep)
                },
                error: (error) => {
                  console.log('uhhhhhh error')
                  Alert.alert('WebRTC error:', error)
                }
              })
            },
            error: (error) => {
              Alert.alert("  -- Error attaching plugin...", error)
            },
            consentDialog: (on) => {
            },
            mediaState: (medium, on) => {
            },
            webrtcState: (on) => {
            },
            onmessage: (msg, jsep) => {
              const event = msg['videoroom']
              if(event != undefined && event != null) {
                if(event === 'joined') {
                  console.log('MESSAGE JOINED', msg)
                    let myid = msg['id']
                    this.publishOwnFeed(true)
                    if(msg['publishers'] !== undefined && msg['publishers'] !== null) {
                      const list = msg['publishers']
                      for(const f in list) {
                        const id = list[f]['id']
                        const display = list[f]['display']
                        this.newRemoteFeed(id, display)
                      }
                    }
                } else if(event === 'destroyed') {
                  console.log('distroying')
                // } else if(event === 'event') {
                //   if(msg['publishers'] !== undefined && msg['publishers'] !== null) {
                //     const list = msg['publishers']
                //     for(const f in list) {
                //       let id = list[f]['id']
                //       let display = list[f]['display']
                //       this.newRemoteFeed(id, display)
                //     }
                //   } else if(msg['error'] !== undefined && msg['error'] !== null) {
                //     console.log(msg['error'])
                //   }
                }
              }
              if(jsep !== undefined && jsep !== null) {
                sfu.handleRemoteJsep({jsep: jsep});
              }
            },
            onlocalstream: (stream) => {
              console.log('ONLOCALSTREAM stream $$$$$$$$$$', stream)
              this.setState({selfViewSrc: stream.toURL()})
              this.setState({selfViewSrcKey: Math.floor(Math.random() * 1000)})
              this.setState({status: 'ready', info: 'Please enter or create room ID'})
            },
            onremotestream: (stream) => {
              console.log('onremotestream', stream)
            },
            oncleanup: () => {
              console.log('Clean up')
            }
          })
      },
      error: (error) => {
        Alert.alert("Janus Error", error)
      },
      destroyed: () => {
        Alert.alert("Success for End Call")
      }
    })
  }

  publishOwnFeed(useAudio){
    sfu.createOffer({
      media: { audioRecv: false, videoRecv: false, audioSend: useAudio, videoSend: true},
      success: (jsep) => {
        console.log('PUBLISH OWNFEED SUCCESS', jsep)
        const publish = { 'request': 'publish', 'audio': useAudio, 'video': true }
        sfu.send({'message': publish, 'jsep': jsep})
      },
      error: (error) => {
        console.log('PUBLISH OWNFEED ERROR')
        Alert.alert('WebRTC error:', error)
        // if (useAudio) {
        //   publishOwnFeed(false)
        // }
      }
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          { this.state.selfViewSrc && <RTCView key={this.state.selfViewSrcKey} streamURL={this.state.selfViewSrc} style={styles.remoteView} /> }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  selfView: {
    width: 200,
    height: 150,
  },
  remoteView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2.35
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  listViewContainer: {
    height: 150,
  },
})

export default Video