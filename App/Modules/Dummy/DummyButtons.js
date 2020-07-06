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
  return <Button onPress={() => add()} label={'Add Dummy'} />
}

export const ClearDummies = () => {
  const [{ osc }, dispatch] = useOscValue()
  osc
  const removeKind = () => {
    dispatch({
      type: 'REMOVE_KIND',
      kind: 'dummy',
    })
  }
  return <Button onPress={() => removeKind()} label={'Clear Dummies'} />
}

function Button({ onPress, label }) {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#000', false)}
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text>{label}</Text>
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
