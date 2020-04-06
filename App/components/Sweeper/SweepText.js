import React, { useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native'
import Slider from '@react-native-community/slider'
import { Dimensions } from 'react-native'

import { KillSingleOsc, SetSingleVolume } from '../WebAudio/oscFunctions'
import { useOscValue } from '../WebAudio'

const width = Dimensions.get('window').width

const Input = (props) => {
  return (
    <TextInput style={styles.textInput} keyboardType={'numeric'} {...props} />
  )
}

export const SweepInputText = (props) => {
  const timeout = useRef(null)
  const [start, setStart] = useState(2500)
  const [end, setEnd] = useState(100)
  const [time, setTime] = useState(5)
  const [db, setDb] = useState(0)
  const [active, setActive] = useState(false)

  const [{ osc }, dispatch] = useOscValue()
  osc

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#333',
        flex: 1,
        width: width,
        marginBottom: 20,
        paddingTop: 30,
        paddingBottom: 10,
      }}
    >
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#000', false)}
        onPress={() => {
          Remove(props.oscNumber)
        }}
      >
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'flex-end',
            width: 36,
            right: 10,
            position: 'absolute',
          }}
        >
          <Text style={{ fontSize: 36 }}>X</Text>
        </View>
      </TouchableNativeFeedback>
      <Text>Frequency</Text>
      <View style={styles.inputsWrapper}>
        <View style={styles.textInputContainer}>
          <Text>Start: </Text>
          <Input
            onChangeText={(text) => setStart(text)}
            value={start.toString()}
          />
          <Text> Hz </Text>
        </View>

        <View style={styles.textInputContainer}>
          <Text>End: </Text>
          <Input onChangeText={(text) => setEnd(text)} value={end.toString()} />
          <Text> Hz </Text>
        </View>
      </View>

      <View style={styles.textInputContainer}>
        <Text>Seconds: </Text>
        <Input onChangeText={(text) => setTime(text)} value={time.toString()} />
        <Text>( Min: {parseFloat(time / 60).toFixed(2)} )</Text>
      </View>

      <View style={styles.textInputContainer}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#000', false)}
          disabled={active}
          onPress={() => {
            Sweep()
          }}
        >
          <View style={active ? styles.buttonOn : styles.button}>
            <Text>{active ? 'Playing...' : 'Sweep'}</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#000', false)}
          onPress={() => {
            Stop()
          }}
        >
          <View style={styles.button}>
            <Text>Stop</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <Text style={{ color: 'white' }}>Db: {db.toFixed(2)}</Text>
      <Slider
        style={styles.slider}
        value={db}
        onValueChange={(value) => {
          setDb(value)
          Volume()
        }}
        minimumValue={-50}
        maximumValue={-0}
        maximumTrackTintColor={'#666'}
        minimumTrackTintColor={'#666'}
      />
    </View>
  )

  function Remove() {
    KillSingleOsc(props.oscNumber)
    dispatch({
      type: 'REMOVE_OSC',
      payload: props.oscNumber,
    })
  }

  function Stop() {
    KillSingleOsc(props.oscNumber)
    setActive(false)
    clearTimeout(timeout.current)
    // return this.webview... clearTimeouts..
  }

  function Volume() {
    SetSingleVolume(props.oscNumber, db)
  }

  function Sweep() {
    setActive(true)
    timeout.current = setTimeout(() => {
      setActive(false)
    }, time * 1000 + 200)

    // need to shut down the timers in tone...
    return this.webview.injectJavaScript(`
      osc[${props.oscNumber}] = new Tone.Oscillator({
        'type': 'sine',
        'volume': '-Infinity',
        'frequency': ${start}
      }).chain(output, Tone.Master).start();
      osc[${props.oscNumber}].volume.rampTo(${db}, 0.2);
      osc[${props.oscNumber}].frequency.rampTo(${end}, ${time});
      
      setTimeout(() => {
        osc[${props.oscNumber}].volume.rampTo(-Infinity, 0.2);
      }, (${time} * 1000 - 200));

      setTimeout(() => {
        osc[${props.oscNumber}].dispose();
      }, (${time} * 1000));
    `)
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    backgroundColor: '#ddd',
    width: 50,
    fontSize: 14,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  inputsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width,
  },
  slider: {
    width: width * 0.8,
    height: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'gray',
    height: 30,
    width: width * 0.4,
    margin: 5,
  },
  buttonOn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'darkgreen',
    height: 30,
    width: width * 0.4,
    margin: 5,
  },
})
