import React from 'react'
import { ScrollView, StatusBar } from 'react-native'

import WebAudio, {
  initialState,
  reducer,
  OscProvider,
  MasterController,
} from './components/WebAudio'

import { Sweeper } from './components/Sweeper'

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <WebAudio />
      <OscProvider initialState={initialState} reducer={reducer}>
        <ScrollView contentInsetAdjustmentBehavior={'automatic'}>
          <Sweeper />
        </ScrollView>
        <MasterController />
      </OscProvider>
    </>
  )
}

export default App
