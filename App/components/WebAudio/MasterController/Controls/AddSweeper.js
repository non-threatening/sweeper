import React from 'react'
import {
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  View,
} from 'react-native'
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
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#000', false)}
      onPress={_add}>
      <View style={styles.button}>
        <Text>Add Sweeper</Text>
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
    margin: 15,
  },
})
