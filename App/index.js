import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import WebAudio, {
  initialState,
  reducer,
  OscProvider
  // MasterController
} from './components/WebAudio'

import { SweepTextAdder } from './components/Sweeper'

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <WebAudio />
      <SafeAreaView style={styles.body}>
        <OscProvider initialState={initialState} reducer={reducer}>
          <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            style={styles.scrollView}>
            <View style={styles.sectionContainer}>
              {/* <MasterController /> */}
              <SweepTextAdder />
            </View>
          </ScrollView>
        </OscProvider>
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
