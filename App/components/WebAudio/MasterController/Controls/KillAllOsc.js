import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native'

const width = Dimensions.get('window').width

import { KillAllOsc } from '../masterFunctions'
import { useOscValue } from '../../oscContext'

export function KillAllOscButton() {
  const [{ osc }, dispatch] = useOscValue()
  osc
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => {
        KillAllOsc()
        dispatch({
          type: 'KILL_OSC',
        })
      }}>
      <Text style={styles.text}>Clear All</Text>
    </TouchableHighlight>
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
