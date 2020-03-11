import React, { useState } from 'react'
import { StyleSheet, TouchableNativeFeedback, Text, View } from 'react-native'
import { SweepInputText } from './'
import { useStateValue } from '../../context'

export const SweepTextAdder = () => {
  const [{ osc }, dispatch] = useStateValue()
  const [knobs, setKnobs] = useState([])
  // let key = 0
  // eslint-disable-next-line no-shadow
  let newKnobs = knobs.map((item, osc) => {
    return <SweepInputText key={osc} osc={osc} />
  })
  const _add = () => {
    let addKnob = { key: osc }
    setKnobs([...knobs, addKnob])
    // key = key + 1
    // return this.webview.injectJavaScript(`
    // window.ReactNativeWebView.postMessage('inject from App.js');
    // `)
    dispatch({
      type: 'NEW_OSC'
    })
  }

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
