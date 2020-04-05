import React from 'react'
import { Dimensions, StyleSheet, TouchableHighlight, Text } from 'react-native'
import { useOscValue } from '../../oscContext'

const width = Dimensions.get('window').width

export const AddSweeper = () => {
  const [{ osc }, dispatch] = useOscValue()
  osc
  const _add = () => {
    dispatch({
      type: 'NEW_OSC',
      kind: 'sweeper',
    })
  }

  return (
    <TouchableHighlight style={styles.button} onPress={_add}>
      <Text>Add Sweeper</Text>
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
    margin: 15,
  },
})
