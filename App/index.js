import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import WebAudio from './components/WebAudio'
import { initialState, reducer, StateProvider } from './context'

import { SweepTextAdder } from './components/WebAudio/SweepTextAdder'

const App = () => {
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
                <SweepTextAdder />
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
