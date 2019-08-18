import React, { Fragment } from 'react'
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import { WebView } from 'react-native-webview'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Button
                onPress={() => {
                  _add()
                }}
                title='tone'
              />
            </View>
          </View>
          <WebView
            originWhitelist={['*']}
            style={{
              marginTop: 20,
              backgroundColor: 'blue',
              color: 'white',
              height: 200
            }}
            source={{ uri: 'file:///android_asset/index/index.html' }}
            ref={ref => (this.webview = ref)}
            // onLoad={() => this.setState({ splash: false })}
            onMessage={event => console.log(event.nativeEvent.data)}
            mediaPlaybackRequiresUserAction={false}
          />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )

  function _add() {
    // let addKnob = { key: this.key, type: type, shape: type }
    // this.setState({ knobs: [...this.state.knobs, addKnob] })
    this.webview.injectJavaScript(`
      osc[${this.key}] = new Tone.Oscillator({
        'type': 'sine',
        'volume': '-25'
      }).chain(output, Tone.Master).start();
      `)
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.darker
  },
  body: {
    backgroundColor: Colors.black
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.pink
  }
})

export default App
