import React from 'react'
import { ScrollView, StatusBar } from 'react-native'

import WebAudio, {
  initialState,
  reducer,
  OscProvider,
} from './components/WebAudio'
import { MasterController } from './components/MasterController'

import { Sweeper } from './components/Sweeper'
import { Dummy } from './components/Dummy'
import { AddDummy } from './components/Dummy/AddDummy'

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
