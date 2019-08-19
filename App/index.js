import React, { Fragment } from 'react'
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import WebAudio, { Stop, TestTone } from './components/WebAudio'
import { Sweep } from './components/WebAudio/Sweep'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle='dark-content' />
      <WebAudio />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Button
                onPress={() => {
                  Sweep()
                }}
                title='Sweep'
              />
              <Button
                onPress={() => {
                  TestTone()
                }}
                title='TestTone'
              />
              <Button
                onPress={() => {
                  Stop()
                }}
                title='Stop'
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
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
    marginTop: 32,
    paddingHorizontal: 24
  }
})

export default App
