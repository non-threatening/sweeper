import React from 'react'
import { ScrollView, StatusBar } from 'react-native'

import WebAudio, { initialState, reducer, OscProvider } from './WebAudio'
import { MasterController } from './MasterController'

import { Sweeper } from './Modules/Sweeper'
import { Dummy } from './Modules/Dummy'
import { AddDummy } from './Modules/Dummy/AddDummy'

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <WebAudio />
      <OscProvider initialState={initialState} reducer={reducer}>
        <ScrollView contentInsetAdjustmentBehavior={'automatic'}>
          <Sweeper />
          <Dummy />
        </ScrollView>
        <AddDummy />
        <MasterController />
      </OscProvider>
    </>
  )
}

export default App
