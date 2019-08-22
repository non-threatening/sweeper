import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import Slider from '@react-native-community/slider'

export const SweepInput = () => {
  const [start, setStart] = useState(2500)
  const [end, setEnd] = useState(0)
  const [time, setTime] = useState(0)
  console.log(start)

  return (
    <>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          Sweep()
        }}>
        <Text style={styles.text}>Sweep</Text>
      </TouchableHighlight>
      <Text style={{ color: 'red' }}>Start: {start}</Text>
      <Slider
        style={{ width: 300, height: 40 }}
        value={2500}
        onValueChange={value => {
          setStart(value)
        }}
        maximumValue={5000}
      />

      <Text style={{ color: 'red' }}>End: {end}</Text>
      <Slider
        style={{ width: 400, height: 40 }}
        value={0}
        onValueChange={value => {
          setEnd(value)
        }}
        maximumValue={5000}
      />

      <Text style={{ color: 'red' }}>Time: {time}</Text>
      <Slider
        style={{ width: 300, height: 40 }}
        value={0}
        onValueChange={value => {
          setTime(value)
        }}
        maximumValue={500}
      />
    </>
  )

  function Sweep() {
    return this.webview.injectJavaScript(`
    osc[666] = new Tone.Oscillator({
      'type': 'sine',
      'volume': '-1',
      'frequency': ${start}
    }).chain(output, Tone.Master).start();
    osc[666].frequency.rampTo(${end}, ${time});
    window.ReactNativeWebView.postMessage('Sweep start');
    setTimeout(() => {
      osc[666].volume.rampTo(-Infinity, 0.2);
      osc.forEach(o => { o.dispose(); });
      osc.length = 0;
    }, (${time} * 1000 - 200));
    `)
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#333'
  },
  button: {
    backgroundColor: 'gray',
    height: 30,
    margin: 5
  }
})
