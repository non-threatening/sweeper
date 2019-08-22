import React, { Fragment } from 'react'
import {
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Text
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import WebAudio, {
  Stop,
  Sweep,
  SweepInput
  // TestTone
} from './components/WebAudio'

const screenWidth = Math.round(Dimensions.get('window').width);

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
      </SafeAreaView>
    </Fragment>
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
