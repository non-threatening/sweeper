import React from 'react'
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Text
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import WebAudio, { Stop, SweepInput } from './components/WebAudio'
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
                <SweepInput />
                <SweepInput />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    Stop()
                  }}>
                  <Text style={styles.text}>Stop</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </StateProvider>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#333'
  },
  button: {
    backgroundColor: 'gray',
    height: 30,
    margin: 5
  },
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
