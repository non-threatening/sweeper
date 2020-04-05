import React from 'react'
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native'
import { useOscValue } from '../../oscContext'

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
    <TouchableHighlight onPress={_add}>
      <View style={styles.button}>
        <Text style={{ textAlign: 'center', marginTop: 10 }}>ADD SWEEPER</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gray',
    height: 40,
    marginLeft: 25,
    marginRight: 25,
  },
})
