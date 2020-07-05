import React from 'react'
import {
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  View,
} from 'react-native'
import { useOscValue } from '../../WebAudio/oscContext'

const width = Dimensions.get('window').width

export const AddDummy = () => {
  const [{ osc }, dispatch] = useOscValue()
  osc
  const add = () => {
    dispatch({
      type: 'NEW_OSC',
      kind: 'dummy',
    })
  }

  const removeKind = () => {
    dispatch({
      type: 'REMOVE_KIND',
      kind: 'dummy',
    })
  }

  return (
    <>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#000', false)}
        onPress={add}
      >
        <View style={styles.button}>
          <Text>Add Dummy</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#000', false)}
        onPress={removeKind}
      >
        <View style={styles.button}>
          <Text>Clear Dummies</Text>
        </View>
      </TouchableNativeFeedback>
    </>
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
