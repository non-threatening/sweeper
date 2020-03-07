import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  View
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import WebAudio, { SweepInputText } from './components/WebAudio'
import { initialState, reducer, StateProvider } from './context'

const App = () => {
  const [knobs, setKnobs] = useState([])
  let key = 0

  // eslint-disable-next-line no-shadow
  let newKnobs = knobs.map((item, key) => {
    return <SweepInputText key={key} />
  })
  const _add = () => {
    let addKnob = { key: key }
    setKnobs([...knobs, addKnob])
    // console.log(newKnobs)
    key = key + 1
    // return this.webview.injectJavaScript(`
    // window.ReactNativeWebView.postMessage('inject from App.js');
    // `)
  }

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <WebAudio />
      <SafeAreaView style={styles.body}>
        <StateProvider initialState={initialState} reducer={reducer}>
          <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <SweepInputText />
                {newKnobs}
                <TouchableNativeFeedback
                  onPress={_add}
                  background={TouchableNativeFeedback.SelectableBackground()}>
                  <View style={styles.button}>
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>
                      ADD SWEEPER
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          </ScrollView>
        </StateProvider>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.darker
  },
  body: {
    backgroundColor: Colors.black
  },
  sectionContainer: {
    marginTop: 32
  },
  button: {
    backgroundColor: 'gray',
    height: 40,
    marginLeft: 25,
    marginRight: 25
  }
})

export default App
