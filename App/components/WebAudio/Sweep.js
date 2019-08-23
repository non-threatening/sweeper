import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import Slider from '@react-native-community/slider'
import width from '../constants'
import { useStateValue } from '../../context'

export const SweepInput = () => {
  const [{ osc }, dispatch] = useStateValue()
  console.log(osc)

  const [start, setStart] = useState(2500)
  const [end, setEnd] = useState(0)
  const [time, setTime] = useState(0)
  // console.log(start)

  return (
    <>
      <Text style={{ color: 'red' }}>Start: {start}</Text>
      <Slider
        style={styles.slider}
        value={2500}
        onValueChange={value => {
          setStart(value)
        }}
        maximumValue={5000}
      />

      <Text style={{ color: 'red' }}>End: {end}</Text>
      <Slider
        style={styles.slider}
        value={0}
        onValueChange={value => {
          setEnd(value)
        }}
        maximumValue={5000}
      />

      <Text style={{ color: 'red' }}>Time: {time}</Text>
      <Slider
        style={styles.slider}
        value={0}
        onValueChange={value => {
          setTime(value)
        }}
        maximumValue={500}
      />

      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          Sweep()
          dispatch({
            type: 'NEW_OSC'
          })
        }}>
        <Text style={styles.text}>Sweep</Text>
      </TouchableHighlight>
    </>
  )

  function Sweep() {
    return this.webview.injectJavaScript(`
    osc[${osc}] = new Tone.Oscillator({
      'type': 'sine',
      'volume': '-1',
      'frequency': ${start}
    }).chain(output, Tone.Master).start();
    osc[${osc}].frequency.rampTo(${end}, ${time});
    window.ReactNativeWebView.postMessage('Sweep start');

    setTimeout(() => {
      osc[${osc}].volume.rampTo(-Infinity, 0.2);
    }, (${time} * 1000 - 200));

    setTimeout(() => {
      osc[${osc}].forEach(o => { o.dispose(); });
      osc[${osc}].length = 0;
      window.ReactNativeWebView.postMessage('Sweep end');
    }, (${time} * 1000));
    `)
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#333'
  },
  slider: {
    width: width,
    height: 30
  },
  button: {
    backgroundColor: 'gray',
    height: 30,
    margin: 5
  }
})
