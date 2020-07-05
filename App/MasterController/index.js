import React from 'react'
import { StyleSheet, View } from 'react-native'

import { MasterDB } from './Controls/MasterDB'
import { KillAllOscButton } from './Controls/KillAllOsc'
import { AddSweeper } from '../Modules/Sweeper/AddSweeper'

export const MasterController = () => {
  return (
    <>
      <View style={styles.buttonContainer}>
        <MasterDB />
      </View>
      <View style={styles.buttonContainer}>
        <KillAllOscButton />
        <AddSweeper />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#222',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
