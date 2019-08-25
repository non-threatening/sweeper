import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import WebAudio, { SweepInputText } from './components/WebAudio'
import { initialState, reducer, StateProvider } from './context'

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <WebAudio />
      <SafeAreaView>
        <StateProvider initialState={initialState} reducer={reducer}>
          <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <SweepInputText />
                <SweepInputText />
                <SweepInputText />
                <SweepInputText />
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
  }
})

export default App
