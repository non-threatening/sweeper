import React from 'react'
import { ScrollView, StatusBar } from 'react-native'

import WebAudio, { initialState, reducer, OscProvider } from './WebAudio'
import { MasterController } from './MasterController'

import { Sweeper } from './Modules/Sweeper'
import { AddDummy, DummyController, ClearDummies } from './Modules/Dummy'

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <WebAudio />
      <OscProvider initialState={initialState} reducer={reducer}>
        <ScrollView contentInsetAdjustmentBehavior={'automatic'}>
          <Sweeper />
          <DummyController />
        </ScrollView>
        <AddDummy />
        <ClearDummies />
        <MasterController />
      </OscProvider>
    </>
  )
}

export default App
