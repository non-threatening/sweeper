import React, { useState } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import Slider from '@react-native-community/slider'
import { useStateValue } from '../../context'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

const Input = props => {
  return (
    <TextInput style={styles.textInput} keyboardType={'numeric'} {...props} />
  )
}

export const SweepInputText = () => {
  const [{ osc }, dispatch] = useStateValue()
  const [start, setStart] = useState(2500)
  const [end, setEnd] = useState(100)
  const [time, setTime] = useState(5)
  const [db, setDb] = useState(-1)
  const [thisOsc, setThisOsc] = useState(osc)

  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#222',
        flex: 1,
        width: width,
        marginBottom: 25,
        paddingVertical: 10
      }}>
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>Start: </Text>
        <Input onChangeText={text => setStart(text)} value={start.toString()} />
        <Text style={styles.text}> Hz </Text>
      </View>

      <View style={styles.textInputContainer}>
        <Text style={styles.text}>End: </Text>
        <Input onChangeText={text => setEnd(text)} value={end.toString()} />
        <Text style={styles.text}> Hz </Text>
      </View>

      <View style={styles.textInputContainer}>
        <Text style={styles.text}>Seconds: </Text>
        <Input onChangeText={text => setTime(text)} value={time.toString()} />
        <Text style={styles.text}>
          {' '}
          ( Min: {parseFloat(time / 60).toFixed(2)} )
        </Text>
      </View>

      <View style={styles.textInputContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            dispatch({
              type: 'NEW_OSC'
            })
            Sweep()
            setThisOsc(osc)
          }}>
          <Text style={styles.buttonText}>Sweep</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            Stop()
          }}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableHighlight>
      </View>

      <Text style={{ color: 'red' }}>Db: {db}</Text>
      <Slider
        style={styles.slider}
        value={db}
        onValueChange={value => {
          setDb(value)
          Volume()
        }}
        minimumValue={-40}
        maximumValue={-1}
        maximumTrackTintColor={'#666'}
        minimumTrackTintColor={'#666'}
      />
    </View>
  )

  function Stop() {
    return this.webview.injectJavaScript(`
      osc[${thisOsc}].volume.rampTo(-Infinity, 0.1);
      setTimeout(() => {
        osc[${thisOsc}].dispose();
      }, (100));
    `)
  }

  function Volume() {
    return this.webview.injectJavaScript(`
      osc[${thisOsc}].volume.rampTo(${db}, 0.1);
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
    
    setTimeout(() => {
      osc[${osc}].volume.rampTo(-Infinity, 0.2);
    }, (${time} * 1000 - 200));

    setTimeout(() => {
      osc[${osc}].dispose();
    }, (${time} * 1000));
    `)
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    backgroundColor: '#666',
    width: 100
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  },
  text: {
    color: 'red',
    width: 100
  },
  buttonText: {
    color: 'white'
  },
  slider: {
    width: width * 0.8,
    height: 40
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'gray',
    height: 30,
    width: width * 0.4,
    margin: 5
  }
})
