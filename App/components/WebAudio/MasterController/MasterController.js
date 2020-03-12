import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Slider from '@react-native-community/slider'

import { SetVolume } from './masterFunctions'

import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width

export const MasterController = () => {
  const [db, setDb] = useState(0)

  useEffect(() => {
    SetVolume(db)
  }, [db])

  return (
    <View style={styles.container}>
      <Text>Db: {db.toFixed(2)}</Text>
      <Slider
        style={styles.slider}
        value={db}
        onValueChange={value => {
          setDb(value)
        }}
        minimumValue={-50}
        maximumValue={-0}
        maximumTrackTintColor={'#666'}
        minimumTrackTintColor={'#666'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'plum',
    flex: 1,
    width: width,
    marginBottom: 25,
    paddingVertical: 10
  },
  slider: {
    width: width * 0.8,
    height: 40
  }
})
