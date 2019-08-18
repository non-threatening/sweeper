import React from 'react'
import { WebView } from 'react-native-webview'

const WebAudio = () => {
  return (
    <WebView
      originWhitelist={['*']}
      style={{ height: 0, width: 0, opacity: 0 }}
      source={{ uri: 'file:///android_asset/index/index.html' }}
      ref={ref => (this.webview = ref)}
      // onLoad={() => this.setState({ splash: false })}
      onMessage={event => console.log(event.nativeEvent.data)}
      mediaPlaybackRequiresUserAction={false}
    />
  )
}

export default WebAudio
