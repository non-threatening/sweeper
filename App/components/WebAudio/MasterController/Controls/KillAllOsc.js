import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width

import { useOscValue } from '../../'

export function KillAllOscButton() {
  const [{ osc }, dispatch] = useOscValue()
  osc
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          dispatch({
            type: 'KILL_OSC'
          })
          return this.webview.injectJavaScript(`
            osc.forEach(o => { o.dispose(); });
            osc.length = 0;
          `)
        }}>
        <Text style={styles.text}>Stop</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'plum',
    flex: 1,
    width: width,
    marginTop: 10,
    paddingVertical: 10
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
