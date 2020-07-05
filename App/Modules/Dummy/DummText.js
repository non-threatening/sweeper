import React from 'react'
import { Text, TouchableNativeFeedback, View } from 'react-native'
import { Dimensions } from 'react-native'

import { KillSingleOsc } from '../../WebAudio/oscFunctions'
import { useOscValue } from '../../WebAudio'

const width = Dimensions.get('window').width

export const DummInputText = (props) => {
  const [{ osc }, dispatch] = useOscValue()
  osc

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        flex: 1,
        width: width,
        marginBottom: 10,
        height: 80,
      }}
    >
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#000', false)}
        onPress={() => {
          Remove(props.oscNumber)
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Text>{props.oscNumber}</Text>
          <Text style={{ fontSize: 36 }}>X</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )

  function Remove() {
    KillSingleOsc(props.oscNumber)
    dispatch({
      type: 'REMOVE_OSC',
      payload: props.oscNumber,
    })
  }
}
