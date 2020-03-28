import React from 'react'
import { MasterDB } from './Controls/MasterDB'
import { KillAllOscButton } from './Controls/KillAllOsc.js'

export const MasterController = () => {
  return (
    <>
      <KillAllOscButton />
      <MasterDB />
    </>
  )
}

// change sweep to have its own osc instead of creating a new one all the time, and have killAllOsc clear them

// way to delete individual sweeper panels and it's osc.
