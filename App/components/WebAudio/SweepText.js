import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, TouchableHighlight } from 'react-native'
// import Slider from '@react-native-community/slider'
import width from '../constants'
import { useStateValue } from '../../context'

export const SweepInputText = () => {
  const [{ osc }, dispatch] = useStateValue()
  const [start, setStart] = useState(2500)
  const [end, setEnd] = useState(100)
  const [time, setTime] = useState(5)

  return (
    <>
      <Text style={{ color: 'red' }}>Start: {start}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setStart(text)}
        value={start.toString()}
        keyboardType={'numeric'}
      />

      <Text style={{ color: 'red' }}>End: {end}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setEnd(text)}
        value={end.toString()}
        keyboardType={'numeric'}
      />

      <Text style={{ color: 'red' }}>Time: {time}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setTime(text)}
        value={time.toString()}
        keyboardType={'numeric'}
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
  textInput: {
    height: 40,
    backgroundColor: 'white'
  },
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
