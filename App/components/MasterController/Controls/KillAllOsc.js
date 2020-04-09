import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native'

const width = Dimensions.get('window').width

import { KillAllOsc } from '../masterFunctions'
import { useOscValue } from '../../WebAudio/oscContext'

export function KillAllOscButton() {
  const [{ osc }, dispatch] = useOscValue()
  osc
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#000', false)}
      onPress={() => {
        KillAllOsc()
        dispatch({
          type: 'KILL_OSC',
        })
      }}
    >
      <View style={styles.button}>
        <Text style={styles.text}>Clear All</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'gray',
    height: 30,
    width: width * 0.4,
    margin: 5,
  },
})
