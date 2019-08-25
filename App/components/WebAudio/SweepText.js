import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, TouchableHighlight } from 'react-native'
import Slider from '@react-native-community/slider'
import width from '../constants'
import { useStateValue } from '../../context'

export const SweepInputText = () => {
  const [{ osc }, dispatch] = useStateValue()
  const [start, setStart] = useState(2500)
  const [end, setEnd] = useState(100)
  const [time, setTime] = useState(5)
  const [db, setDb] = useState(-1)

  return (
    <>
      <Text style={{ color: 'red' }}>Start: {start} Hz</Text>
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

      <Text style={{ color: 'red' }}>Seconds: {time}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setTime(text)}
        value={time.toString()}
        keyboardType={'numeric'}
      />

      <Text style={{ color: 'red' }}>Db: {db}</Text>
      <Slider
        style={styles.slider}
        value={time}
        onValueChange={value => {
          setDb(value)
          // return this.webview.injectJavaScript(`
          //   osc[${osc}].volume.rampTo(${db}, 0.1);
          // `)
        }}
        minimumValue={-40}
        maximumValue={0}
        maximumTrackTintColor={'white'}
        minimumTrackTintColor={'white'}
      />

      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          dispatch({
            type: 'NEW_OSC'
          })
          Sweep()
        }}>
        <Text style={styles.text}>Sweep</Text>
      </TouchableHighlight>
    </>
  )

  function Volume() {
    return this.webview.injectJavaScript(`
      osc[${osc}].volume.rampTo(${db}, 0.1);
    `)
  }

  function Sweep() {
    return this.webview.injectJavaScript(`
    osc[${osc}] = new Tone.Oscillator({
      'type': 'sine',
      'volume': ${db},
      'frequency': ${start}
    }).chain(output, Tone.Master).start();
    osc[${osc}].frequency.rampTo(${end}, ${time});
    window.ReactNativeWebView.postMessage('Sweep stt');
    
    setTimeout(() => {
      window.ReactNativeWebView.postMessage('Sweep middle');
      osc[${osc}].volume.rampTo(-Infinity, 0.2);
    }, (${time} * 1000 - 200));

    setTimeout(() => {
      window.ReactNativeWebView.postMessage('Sweep end');
      osc[${osc}].o.dispose();
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
