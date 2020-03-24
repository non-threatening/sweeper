import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableNativeFeedback, Text, View } from 'react-native'
import { SweepInputText } from './SweepText'
import { useOscValue } from '../WebAudio'

export const SweepTextAdder = () => {
  const [{ osc }, dispatch] = useOscValue()
  const [knobs, setKnobs] = useState([])

  // eslint-disable-next-line no-shadow
  let newKnobs = knobs.map((item, osc) => {
    return <SweepInputText key={osc} osc={osc} />
  })
  const _add = () => {
    let addKnob = { key: osc }
    setKnobs([...knobs, addKnob])
    dispatch({
      type: 'NEW_OSC'
    })
  }

  useEffect(() => {
    // KillAllOsc, clear all sweepers
    if (osc === 0) {
      setKnobs([])
    }
  }, [osc])

  useEffect(() => {
    _add()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {newKnobs}
      <TouchableNativeFeedback
        onPress={_add}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.button}>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>
            ADD SWEEPER
          </Text>
        </View>
      </TouchableNativeFeedback>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gray',
    height: 40,
    marginLeft: 25,
    marginRight: 25
  }
})
