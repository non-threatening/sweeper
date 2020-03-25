import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableNativeFeedback, Text, View } from 'react-native'
import { SweepInputText } from './SweepText'
import { useOscValue } from '../WebAudio'

export const SweepTextAdder = () => {
  const [{ osc }, dispatch] = useOscValue()
  const [knobs, setKnobs] = useState([])

  let newKnobs = knobs.map((item, index) => {
    return <SweepInputText key={item.key} osc={item.key} />
  })
  const _add = () => {
    let newOsc = Math.max(...osc) + 1
    let addKnob = { key: newOsc }
    setKnobs([...knobs, addKnob])
    dispatch({
      type: 'NEW_OSC',
      payload: newOsc
    })
  }

  useEffect(() => {
    // KillAllOsc, clear all sweepers
    if (osc.length - 1 === 0) {
      setKnobs([])
    }
    console.log(osc)
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
