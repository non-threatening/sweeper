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
